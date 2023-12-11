import React from 'react'
import { useParams } from "react-router-dom";

export const AddressDetails = () => {
    const { addressId } = useParams();
    return <p>Address details for {addressId} will be here</p>
}

export default AddressDetails;