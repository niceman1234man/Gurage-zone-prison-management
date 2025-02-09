import { Visitor } from "../model/visitor.model.js";

export const visitorInformation = async (req, res) => {
  try {
    const userId = req.user._id; 
    const { inmate, visitorsName, relation, phone, date } = req.body;

    if (!inmate || !visitorsName || !relation || !phone || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    let visitor = await Visitor.findOne({ visitorId: userId });
    if (visitor) {
      visitor.inmate = inmate;
      visitor.visitorsName = visitorsName;
      visitor.relation = relation;
      visitor.phone = phone;
      visitor.date = date;
    } else {
      visitor = new Visitor({
        visitorId: userId,
        inmate,
        visitorsName,
        relation,
        phone,
        date,
      });
    }

    await visitor.save();
    res.status(200).json({ visitor, message: "Visitor information saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update Visitor Information
export const updateVisitor = async (req, res) => {
  try {
    const { id } = req.params;
    const { inmate, visitorsName, relation, phone, date } = req.body;

    if (!inmate || !visitorsName || !relation || !phone || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedVisitor = await Visitor.findByIdAndUpdate(
      id,
      { inmate, visitorsName, relation, phone, date },
      { new: true} 
    );

    if (!updatedVisitor) {
      return res.status(404).json({ message: "Visitor not found" });
    }

    res.status(200).json({ data: updatedVisitor, message: "Visitor information updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get All Visitors
export const allVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.status(200).json({ visitors, message: "All Visitors" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete Visitor
export const deleteVisitor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVisitor = await Visitor.findByIdAndDelete(id);

    if (!deletedVisitor) {
      return res.status(404).json({ message: "Visitor not found" });
    }

    res.status(200).json({ message: "Visitor deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
