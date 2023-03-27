import { Room } from "../models/omegle.js";

export const getRooms = async (req, res) => {
    const result = await Room.find();
    res.status(200).json({
        success: "true",
        result: result,
    });
};

export const getRoomByRoomId = async (req, res)=> {
    const id = req.params.roomId;
    try {
        const result = await Room.find({_id: id});
        res.status(200).json({
            success: 'true',
            body: result
        })        
    } catch (err) {
        res.status(500).json({
            success: "failed",
            message: err.message
        })        
    }
    
}
// const retTime = (obj) => {
//     console.log(obj);
//     // let dateString = obj.createdAt;
//     // let dateObject = new Date(dateString);
//     // let hours = dateObject.getUTCHours() * 60 * 60;
//     // let minutes = dateObject.getUTCMinutes() * 60;
//     // let seconds = dateObject.getUTCSeconds();
//     // //main time in seconds
//     // const time = hours + minutes + seconds;
//     // return time;
//     console.log(roomsAvail[0]);
//     const time = retTime(roomsAvail[0]);

//     let currentTime = new Date();
//     let timeInSeconds = Math.floor(currentTime.getTime() / 1000);
    
//     if((roomsAvail[0].createdAt + 60) > timeInSeconds){
//         const id = roomsAvail[0]._id;
//         await Room.deleteOne({_id: id});
//     }
// };

export const joinRoom = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const roomsAvail = await Room.find({ status: "oneUser" }).sort({
        updatedAt: 1,
    });
    console.log(roomsAvail);
    if (Object.keys(roomsAvail).length != 0) {
        if (roomsAvail[0].user1Id == userId) {
            return res.status(500).json({
                message: "user cannot be twice in same room",
                solution: "provide a different userId",
                room: roomsAvail[0],
            });
        }
        console.log("lkjhgfff");
        roomsAvail[0].user2Id = userId;
        roomsAvail[0].status = "filled";
        roomsAvail[0].save();
        res.status(200).json({
            success: "true",
            room: roomsAvail[0],
        });
    } else if (Object.keys(roomsAvail).length == 0) {
        console.log("here");
        const newRoom = await Room.create({ user1Id: userId ,status: 'oneUser'});

        res.status(200).json({
            success: "true",
            message: `user joined in roomId = ${newRoom._id}`,
            room: newRoom,
        });
    }
};

export const leaveRoom = async (req, res) => {
    let response;
    const userId = req.params.userId;
    const result = await Room.find({
        $or: [{ user1Id: userId }, { user2Id: userId }],
    });
    console.log(typeof result);
    if(Object.keys(result).length == 0){
        return res.status(404).json({
            success: "failed",
            result: 'user is not in any room'
        })
    }
    if (result[0].status === "oneUser") {
        const status = await Room.findByIdAndDelete(result[0]._id);
        return res.status(200).json({
            success: "true",
            message: "room was empty.So deleted",
            deleted: status,
        });
    } else {
        if (result[0].user1Id === userId) {
            const temp = result[0].user2Id;
            console.log(temp);
            response = await Room.findOneAndUpdate(
                { _id: result[0]._id },
                {
                    $unset: { user2Id: true },
                    status: "oneUser",
                },
                {new: true}
            );
        } else {
            console.log("user2");
            response = await Room.findOneAndUpdate(
                { _id: result[0]._id },
                {
                    $unset: { user2Id: true },
                    status: "oneUser",
                },
                {new: true}
            );
        }
        
        res.status(200).json({
            success: "true",
            message: 'user left',
            result: `user with id ${userId} left the room`,
            result: response,
        });
    }
};
