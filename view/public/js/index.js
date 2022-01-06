router()
// asynce: 비동기 처리 방식
const router = async() => {
  const routes = [
    {path: "/Main", view: () => console.log("Viewing MainPage")},
    {path: "/Secret", view: () => console.log("Viewing SecretPage")},
    {path: "/Information", view: () => console.log("Viewing InformationPage")},
    {path: "/Promotion", view: () => console.log("Viewing PromotionPage")},
    {path: "/Software", view: () => console.log("Viewing SoftwarePage")}
}




// const routes = {
//   '/Main' : MainPage,
//   '/Secret' : SecretPage
// };
