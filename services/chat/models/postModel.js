const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.ObjectId, ref: "User" },
    username:{type:String, required: true, unique: true},
    profilePicture: String,
    contacts:[{type: mongoose.Schema.ObjectId, ref: "User"}],
	created: { type: Date, default: Date.now },
});
const User = mongoose.model("User", UserSchema);

const IndividualMessagingSchema = new mongoose.Schema({
	sender: { type: mongoose.Schema.ObjectId, ref: "User" },
	receiver: { type: mongoose.Schema.ObjectId, ref: "User" },
	messageType: String,
	message: String,
	timestamp: { type: Date, default: Date.now },
});
const IndividualMessaging = mongoose.model("IndividualMessaging",IndividualMessagingSchema);

const GroupMessagingSchema = new mongoose.Schema({
	participants: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
	groupName: { type: String, required: true },
	profilePicture: String,
	sender: { type: mongoose.Schema.ObjectId, ref: "User" },
	messageType: String,
	message: String,
	timestamp: { type: Date, default: Date.now },
});
const GroupMessaging = mongoose.model("groupMessaging", GroupMessagingSchema);

module.exports = {
	User,
	IndividualMessaging,
	GroupMessaging,
};
