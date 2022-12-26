import React from 'react'
import axios from "axios";

function packages() {
  const [packages, setPackages] = useState([]);
  const url = "http://localhost:3002/packages";
  
  state = {
    packages: []
  }

  axios.get(url)
  .then(res => {
    const packages = res.data;
    this.setState({ packages });
  })

  return (
    <div>
      <h1>Insurance Packages</h1>
      <ul>
        {
          this.state.packages
            .map(packages =>
              <li key={packages.id}>{packages.name}</li>
            )
        }
      </ul>
    </div>
  )
}

export default packages