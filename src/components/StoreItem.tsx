import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export function StoreItem({ id, name, price, imageUrl }: StoreItemProps) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{ objectFit: "contain" }}
      />
    </Card>
  );
}
