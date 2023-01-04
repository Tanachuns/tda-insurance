const User = require("../models").User;
const QRCode = require("qrcode");
const generatePayload = require("promptpay-qr");

const generate = (req, res) => {
  const amount = parseFloat(req.body.amount);
  const mobileNumber = "0815623390";
  const payload = generatePayload(mobileNumber, { amount });
  const option = {
    color: {
      dark: "#000",
      light: "#fff",
    },
  };
  QRCode.toDataURL(payload, option, (err, url) => {
    if (err) {
      return res.status(400).json({
        RespCode: 400,
        RespMessage: "bad : " + err,
      });
    } else {
      return res.status(200).json({
        RespCode: 200,
        RespMessage: "good",
        Result: url,
      });
    }
  });
};

module.exports = {
  generate,
};
