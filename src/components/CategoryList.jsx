import Category from './Category.jsx';
export default function CategoryList(props) {
  /* ADIM 2: categorileri prop olarak alabilirsin */
  return (
    <>
      {props.categories.map((item, index) => (
        <Category category={item} key={index} />
      ))}
    </>
  );
}
