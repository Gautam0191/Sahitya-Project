const mongoose = require("mongoose"); // 👈 यह लाइन सबसे ऊपर होनी चाहिए

const ContentSchema = new mongoose.Schema(
  {
    authorId: { type: Number, required: true },
    authorName: { type: String },
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["poetry", "story", "drama", "essay", "shayari", "doha"],
      required: true,
    },
    content: { type: String, required: true },
    img: { type: String },
    description: { type: String },
    isFeatured: { type: Boolean, default: false }, 
    searchTags: { type: String, default: "" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Content", ContentSchema);
