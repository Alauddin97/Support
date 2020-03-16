import index from index.html

class Index extends React.Component {
   render(){
      return (
         <iframe src="index.php"></iframe>   /* like this */
         <iframe src="index.php"></iframe> /* or like this */
         /* or like any possible way */
      );
   }
}
export default Index;