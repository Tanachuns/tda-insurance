import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const Test = () => {
  const url = "http://localhost:3002";
  const [test, setTest] = useState([]);
  useEffect(() => {
    axios.get(url + "/packages").then((res) => {
      setTest(res.data);
    });
  }, []);
  const packagesElement = test.map((packageItem, id) => {
    return (
      <>
        <form
          method="PUT"
          id={"p" + packageItem.id}
          onSubmit={(e) => handleEdit(e)}
        ></form>
        <Table>
            <Thead>
                <Tr key={id}>
                    <Td>
                        <input
                            type="text"
                            form={"p" + packageItem.id}
                            name="id"
                            defaultValue={packageItem.id}
                            disabled
                        />
                    </Td>
                    <Td>
                        <input
                        type="text"
                        form={"p" + packageItem.id}
                        name="name"
                        defaultValue={packageItem.name}
                        />
                    </Td>
                    <Td>
                        <input
                        type="text"
                        form={"p" + packageItem.id}
                        name="cost"
                        defaultValue={packageItem.cost}
                        />
                    </Td>
                    <Td>
                        <input
                        type="textarea"
                        form={"p" + packageItem.id}
                        name="descript"
                        defaultValue={packageItem.descript}
                        />
                    </Td>
                    <Td>
                        <input
                        type="text"
                        form={"p" + packageItem.id}
                        name="picture"
                        defaultValue={packageItem.picture}
                        />
                    </Td>
                    <Td>
                        <input
                        type="text"
                        form={"p" + packageItem.id}
                        name="type"
                        defaultValue={packageItem.type}
                        />
                    </Td>
                    <Td>
                        <input
                        type="submit"
                        form={"p" + packageItem.id}
                        name="edit"
                        value="edit"
                        />
                    </Td>
                    <Td>
                        <input
                        type="button"
                        id={packageItem.id}
                        value="delete"
                        onClick={(e) => handleDelete(e)}
                        />
                    </Td>
                </Tr>
            </Thead>
        </Table>        
      </>
    );
  });

  const handleEdit = (e) => {
    e.preventDefault();

    const data = {
      id: e.target.elements.id.value,
      name: e.target.elements.name.value,
      cost: e.target.elements.cost.value,
      descript: e.target.elements.descript.value,
      picture: e.target.elements.picture.value,
      type: e.target.elements.type.value.split(","),
    };
    axios.put(url + "/packages/" + data.id, data).then((res) => {
      console.log(res);
      alert("Packages edited");
      window.location.reload(false);
    });
  };
  const handleDelete = (e) => {
    axios.delete(url + "/packages/" + e.target.id).then((res) => {
      console.log(res);
      alert("Car deleted");
      window.location.reload(false);
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.elements.name.value,
      cost: e.target.elements.cost.value,
      descript: e.target.elements.descript.value,
      picture: e.target.elements.picture.value,
      type: e.target.elements.type.value.split(","),
    };
    axios
      .post(url + "/packages", data)
      .then((res) => {
        console.log(res);
        alert("Package Created");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>Name</Th>
            <Th>Cost</Th>
            <Th>Desc</Th>
            <Th>Img</Th>
            <Th>Type</Th>
            <Th>edit</Th>
            <Th>delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {packagesElement}
          <>
            <form
              method="POST"
              id={"packages"}
              onSubmit={(e) => handleCreate(e)}
            ></form>
            <Tr>
              <Td></Td>
              <Td>
                <input type="name" form={"packages"} name="name" />
              </Td>
              <Td>
                <input type="cost" form={"packages"} name="cost" />
              </Td>
              <Td>
                <input type="descript" form={"packages"} name="descript" />
              </Td>
              <Td>
                <input type="picture" form={"packages"} name="picture" />
              </Td>
              <Td>
                <input type="type" form={"packages"} name="type" />
              </Td>
              <Td>
                <input type="submit" form={"packages"} value="add" />
              </Td>
            </Tr>
          </>
        </Tbody>
      </Table>
    </div>
  );
};

export default Test;
