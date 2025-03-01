const mongoose = require("mongoose");

// Auction Item Schema
const auctionItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  currentBid: { type: Number, required: true, default: 0 },
  highestBidder: { type: String, default: null },
  closingTime: { type: Date, required: true },
  isClosed: { type: Boolean, default: false },
});

const AuctionItem = mongoose.model("AuctionItem", auctionItemSchema);

module.exports = AuctionItem;
