import { Room } from "../models/omegle.js";

export const getRooms = async (req, res) => {
    const result = await Room.find();
    res.status(200).json({
        success: "true",
        result: result,
    });
};

export const getRoomByRoomId = async (req, res) => {
    const id = req.params.roomId;
    try {
        const result = await Room.find({ _id: id });
        res.status(200).json({
            success: "true",
            body: result,
        });
    } catch (err) {
        res.status(500).json({
            success: "failed",
            message: err.message,
        });
    }
};

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
        await roomsAvail[0].save();
        res.status(200).json({
            success: "true",
            room: roomsAvail[0],
        });
    } else if (Object.keys(roomsAvail).length == 0) {
        console.log("here");
        try {
            const user = await Room.find({
                $or: [{ user1Id: userId }, { user2Id: userId }],
            });
            console.log("in try", Object.keys(user).length, user);

            if (Object.keys(user).length != 0) {
                console.log("in if under try");
                res.status(200).json({
                    success: "true",
                    message: "user already in a room",
                    room: user,
                });
            } else {
                const newRoom = await Room.create({
                    user1Id: userId,
                    status: "oneUser",
                });
                res.status(200).json({
                    success: "true",
                    message: `user joined in roomId = ${newRoom._id}`,
                    room: newRoom,
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "failed",
                error: error.message,
            });
        }
    }
};
export const leaveRoom = async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await Room.findOneAndDelete({
            $or: [{ user1Id: userId }, { user2Id: userId }],
        });
        console.log(result);
        if (result) {
            res.status(200).json({
                success: "true",
                message: "room deleted!",
                room: result,
            });
        } else {
            res.status(200).json({
                success: "true",
                message: "user not in any room!",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};
