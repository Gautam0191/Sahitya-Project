const AuthorSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    categoryLabel: String,
    img: String,
    // --- ✅ यह लाइन यहाँ जोड़ें ---
    isFavorite: { type: Boolean, default: false }, 
    // ----------------------------
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