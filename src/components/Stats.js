export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start by adding some items to your packing list 🚀</em>
      </p>
    );

  const numOfItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentageDone = Math.round((numOfPacked / numOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentageDone === 100
          ? `You got everything! Ready to go ✈️`
          : `👜 You have ${numOfItems} items on your list, and you already packed ${numOfPacked} (${percentageDone}%)`}
      </em>
    </footer>
  );
}