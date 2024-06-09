// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Products from './Products';
// import OrderDetails from './OrderDetails.js';

// const App = () => {
//   const [order, setOrder] = useState(null); 

//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Products addToCart={(item) => setOrder(item)} />
//         </Route>
//         <Route path="/order">
//           <OrderDetails order={order} /> 
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;

import React, { Component} from 'react';


export default class Products extends Component {
    render() {
        return (
            <div>
                Blog
                </div>
        )
    }
}
