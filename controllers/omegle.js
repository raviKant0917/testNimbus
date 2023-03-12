import { Room } from "../models/omegle.js";

export const getRooms = async (req, res) => {
    const result = await Room.find();
    res.status(200).json({
        success: "true",
        result: result,
    });
};

export const joinRoom = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const roomsAvail = await Room.find({ status: "oneUser" }).sort({
        createdAt: 1,
    });
    if (Object.keys(roomsAvail).length != 0) {
        if (roomsAvail[0].user1Id == userId) {
            return res.status(500).json({
                message: "user already in a room",
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
        
        // const createdAtTime = newRoom.createdAt;
        // console.log(createdAtTime);
        // createdAtTime.setSeconds(createdAtTime.getSeconds() + 30*1000);
        // const timer = setTimeout(async() => {
        //     await newRoom.delete();
        //     console.log("Room deleted successfully");
        // }, 10*1000);

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
        // const response = await Room.find({
        //     $or: [{ user1Id: userId }, { user2Id: userId }],
        // });

        res.status(200).json({
            success: "true",
            message: 'room dropped',
            result: `user with id ${userId} left the room`,
            result: response,
        });
    }
};
