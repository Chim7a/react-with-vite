import { Card } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

function Item(props) {
  return (
    <Card
      onClick={props.alertProductProp}
      hoverable
      cover={
        <img
          className="w-[500px] h-[500px] object-cover"
          alt="example"
          src={props.imgLink}
        />
      }
    >
      <Meta title={props.productName} description={`$${props.price}`} />
    </Card>
  );
}

Item.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
  imgLink: PropTypes.string,
  alertProductProp: PropTypes.func,
};

export default Item;
