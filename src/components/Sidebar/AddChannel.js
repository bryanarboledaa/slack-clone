import { useState } from "react";
import "./AddChannel.scss";
import { IoCloseOutline } from "react-icons/io5";
import { createChannel } from "../../api/api";
import AddUser from "../../forms/AddUser/AddUser";

const AddChannel = ({ headers, handleDummyAddChannel, handleClose }) => {
  const [addChannelName, setChannel] = useState("");
  const [addMembers, setMembers] = useState("");
  const [formToggle, setFormToggle] = useState(false);

  const handleFormToggle = () => {
    if (addChannelName === "") return;
    setFormToggle(!formToggle);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // const addNewChannel = {
    //   name: addChannelName,
    //   user_ids: parseInt(addMembers),
    //   headers: headers,
    // };
    // console.log(addNewChannel);
    // createChannel(addNewChannel)
    //   .then((res) => {
    //     console.log("Add channel success", res);
    //     handleDummyAddChannel();
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="addChannel-form-container">
      <div
        className={
          formToggle
            ? `addChannel-form-items addChannel-hidden`
            : `addChannel-form-items addChannel-block`
        }
      >
        <div
          className={
            formToggle
              ? `addChannel-form-header addChannel-hidden`
              : `addChannel-form-header addChannel-block`
          }
        >
          <h1>Create a private channel</h1>
          <IoCloseOutline onClick={handleClose} />
        </div>

        <div
          className={
            formToggle
              ? `addChannel-form-text addChannel-hidden`
              : `addChannel-form-text addChannel-block`
          }
        >
          <h2>
            Channels are where your team communicates. They’re best when <br />
            organized around a topic — #marketing, for example.
          </h2>
        </div>

        <form onSubmit={onSubmit}>
          <div
            className={
              formToggle
                ? `addChannel-form addChannel-hidden`
                : `addChannel-form addChannel-block`
            }
          >
            <label htmlFor="text">
              <h2>Name</h2>
            </label>
            <input
              type="text"
              placeholder="e.g. plan-budget"
              value={addChannelName}
              onChange={(e) => {
                setChannel(e.target.value);
              }}
            ></input>
          </div>
          <div
            className={
              formToggle
                ? `addChannel-form-btn addChannel-hidden`
                : `addChannel-form-btn addChannel-block`
            }
          >
            <button className="btn" onClick={handleFormToggle}>
              <h3>Create</h3>
            </button>
          </div>
          {/* <div
            className={
              formToggle
                ? `addChannel-form addChannel-block`
                : `addChannel-form addChannel-hidden`
            }
          >
            <label htmlFor="text">
              <h4>Add people</h4>
              <h6>{addChannelName}</h6>
              <IoCloseOutline onClick={handleClose} />
            </label>
            <input
              type="number"
              value={addMembers}
              onChange={(e) => {
                setMembers(e.target.value);
              }}
            ></input>
            <div
              className={
                formToggle
                  ? `addChannel-form-btn addChannel-block`
                  : `addChannel-form-btn addChannel-hidden`
              }
            >
              <button className="btn">
                <h3>Done</h3>
              </button>
            </div>
          </div> */}

          <div
            className={
              formToggle
                ? `addUser-form addChannel-hidden`
                : `addUser-form addChannel-block`
            }
          >
            <AddUser
              className={
                formToggle
                  ? `addUser-form addChannel-hidden`
                  : `addUser-form addChannel-block`
              }
              headers={headers}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChannel;
