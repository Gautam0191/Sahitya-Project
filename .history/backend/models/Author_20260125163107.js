const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true }, // आपका पुराना ID (जैसे 101, 202)
    name: { type: String, required: true },
    category: { type: String, required: true }, // kavi, kahanikar,
    category: { type: String, required: true },
    categoryLabel: String,
    img: String,
    birthDate: String,
    deathDate: String,
    birthPlace: String,
    nickName: String,
    bio: String,
    longBio: String,

    structuredWorks: {
      type: Map,
      of: [String],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Author", AuthorSchema);
