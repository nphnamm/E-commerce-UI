import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

// create event
export const createevent = ( name,
  description,
  category,
  tags,
  originalPrice,
  discountPrice,
  stock,
  shopId,
  images) => async (dispatch) => {
  try {
    dispatch({
      type: "eventCreateRequest",
    });
    const config = {headers :{"Content-Type":"multipart/form-data"}};


    const { data } = await axios.post(
      `${server}/event/create-event`,
      name,
      description,
      category,
      tags,
      originalPrice,
      discountPrice,
      stock,
      shopId,
      images
    );
    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
    toast.success("Created Event Successfully");

  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get all events of a shop
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAlleventsShopRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
    dispatch({
      type: "getAlleventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAlleventsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// delete event of a shop
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteEventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventFailed",
      payload: error.response.data.message,
    });
  }
};
// get all events
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAlleventsRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events`);
    console.log('data', data);
    dispatch({
      type: "getAlleventsSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAlleventsFailed",
      payload: error.response.data.message,
    });
  }
};