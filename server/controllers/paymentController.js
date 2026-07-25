const User = require("../models/User");
const Transaction = require("../models/Transaction");

// Send Money
const sendMoney = async (req, res) => {
    try {
        const { receiverEmail, amount } = req.body;

        const senderId = req.user.id;

        if (!receiverEmail || !amount) {
            return res.status(400).json({
                success: false,
                message: "Receiver email and amount are required"
            });
        }

        const sender = await User.findById(senderId);
        const receiver = await User.findOne({ email: receiverEmail });

        if (!sender) {
            return res.status(404).json({
                success: false,
                message: "Sender not found"
            });
        }

        if (!receiver) {
            return res.status(404).json({
                success: false,
                message: "Receiver not found"
            });
        }

        if (sender._id.toString() === receiver._id.toString()) {
            return res.status(400).json({
                success: false,
                message: "You cannot send money to yourself"
            });
        }

        if (sender.walletBalance < amount) {
            return res.status(400).json({
                success: false,
                message: "Insufficient balance"
            });
        }

        // Update balances
        sender.walletBalance -= Number(amount);
        receiver.walletBalance += Number(amount);

        await sender.save();
        await receiver.save();

        // Save transaction
        const transaction = await Transaction.create({
            sender: sender._id,
            receiver: receiver._id,
            amount,
            status: "SUCCESS"
        });

        return res.status(200).json({
            success: true,
            message: "Money sent successfully",
            transaction,
            senderBalance: sender.walletBalance
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Transaction History
const transactionHistory = async (req, res) => {
    try {
        const { userId } = req.params;

        const transactions = await Transaction.find({
            $or: [
                { sender: userId },
                { receiver: userId }
            ]
        })
        .populate("sender", "name email")
        .populate("receiver", "name email")
        .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            transactions
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    sendMoney,
    transactionHistory
};