const Diary = require("../models/Diary");



module.exports = {
getFeed: async (req, res) => {
    try {
        const diary = await Diary.find().lean();
        res.render("feed.ejs", { diary: diary});
      } catch (err) {
        console.log(err);
      }
  }
}