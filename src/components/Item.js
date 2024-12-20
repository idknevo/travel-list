export default function Item({ item, onDeleteItem, onPackItem }) {
  const { description, quantity, packed } = item;
  const packedStyles = {
    textDecoration: "line-through",
  };
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackItem(item)}
      />
      <span style={packed ? packedStyles : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(item)}>❌</button>
    </li>
  );
}