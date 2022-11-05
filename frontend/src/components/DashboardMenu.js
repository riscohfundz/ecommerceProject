const DashboardMenu = {
    render:  (props) => {
     return `
     <div class="dashboard-menu">
        <ul>
          <li class="${props.selected === 'dashboard' ? 'selected' : ''}">
            <a href="/#/dashboard">Dashboard</a> 
          </li>
          <li class="${props.selected === 'orders' ? 'selected' : ''}">
            <a href="/#/orderList">Orders</a> 
          </li>  
          <li class="${props.selected === 'products' ? 'selected' : ''}">
           <a href="/#/productList">Products</a> 
          </li>    
        </ul>  
      </div>
       `;
    },
};
export default DashboardMenu;