import { Visitor } from "../model/visitor.model.js";
export const visitorInformation = async (req, res) => {
  try {
    const { user } = req.user;
    const { inmate, visitorsName, relation, phone, date } = req.body;
    const visitor = await Visitor.findOne({ visitorId: user._id }); // Await the promise
    if (!visitor) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const newVisitor = new Visitor({
      visitorId: user._id,
      inmate,
      visitorsName,
      relation,
      phone,
      date,
    });
    await newVisitor.save();
    res.status(200).json({ visitor: newVisitor });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};
