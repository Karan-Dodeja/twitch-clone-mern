import { Channel } from "../../models/Channel.js";

export const emitChatHistory = async (socket, channelId) => {
  try {
    const channel = await Channel.findById(channelId).populate("messages");
    // fetch initial chat of channel history
    if (channel) {
      return socket.emit("chat-history", {
        channelId,
        messages: channel.messages.map((m) => ({
          author: m.author,
          content: m.content,
        })),
      });
    }

    socket.emit("chat-history", {
      errorOccurred: true,
    });
  } catch (err) {
    console.log(err);
    socket.emit("chat-history", {
      errorOccurred: true,
    });
  }
};

export const emitChatMessage = async (io, messageData) => {
  try {
    const channel = await Channel.findById(messageData.toChannel);

    if (channel) {
      const newMessage = new Message({
        content: messageData.message.content,
        author: messageData.message.author,
        date: new Date(),
      });

      await newMessage.save();

      channel.messages.push(newMessage._id);

      await channel.save();
    }
  } catch (error) {
    console.log(error);
  }
};
