import LinkButton from "../../ui/LinkButton/LinkButton";
import styles from './SalesPage.module.css'
import SalesItemPage from "./salesItem/SalesItemPage";


function Sales() {
  return <div>
    <div className={styles.productsBtns}>
      <LinkButton path={"/"} title={'Main page'} className={'historyBtn'} />
      <hr />
      <LinkButton path={"/sales"} title={'All sales'} className={'historyBtn'} />
    </div>

    <SalesItemPage />
  </div>;
}
export default Sales;
