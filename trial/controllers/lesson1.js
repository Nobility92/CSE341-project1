const henryroute = (req, res) => {
    res.send("Hello Henry");
  };
  const wendyroute = (req, res) => {
    res.send("Hello Wendy");
  };
  const davidroute = (req, res) => {
    res.send("Hello David");
  };

  module.exports = {
    henryroute,
    wendyroute,
    davidroute
  }