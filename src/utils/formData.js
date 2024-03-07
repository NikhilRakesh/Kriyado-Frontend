import { useState } from "react";
import { Country, State, City } from 'country-state-city';


export const useFormData = () => {
    const [formData, setFormData] = useState({
        Organization: '',
        Owner: '',
        PinCode: '',
        Locality: '',
        Town: '',
        District: '',
        State: '',
        country: '',
        Keypersonname: '',
        KeyPersonContact: '',
        Landphone: '',
        RegisteredAddress: '',
        Type: '',
        Emailid: '',
        Website: '',
        GoogleMaplink: '',
        Facebooklink: '',
        Instagramlink: '',
        Youtubelink: '',
        NormalWorkinghoursFrom: '',
        NormalWorkinghoursTo: '',
        Photosofstore: [],
        Logo: [],
        HeadOfficeAddress: '',
        MobileNumber: '',
        HomeDelivery: '',
        businessType: '',
    });

    return [formData, setFormData];
};


export const getCities = () => {

    const cities = City.getCitiesOfState("IN", "KL").map(c => c.name)
    return cities
}

export const getStates = () => {
    const countries = Country.getAllCountries();

    const india = countries.find(country => country.isoCode === 'IN');

    const states = State.getStatesOfCountry(india.isoCode);

    return states
}


export const keralaDistricts = [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad"
];

export const useFormData2 = () => {
    const [formData2, setFormData2] = useState({
        PinCode: '',
        Locality: '',
        Town: '',
        District: '',
        State: '',
        country: '',
        Keypersonname: '',
        KeyPersonContact: '',
        Landphone: '',
        RegisteredAddress: '',
        Website: '',
        GoogleMaplink: '',
        NormalWorkinghoursFrom: '',
        NormalWorkinghoursTo: '',
        Photosofstore: [],
        HeadOfficeAddress: '',
        HomeDelivery: '',
        businessType: '',
    });

    return [formData2, setFormData2];
};


function profileEditForm() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        district: '',
        state: '',
        address: '',
        dob: '',
        email_id: '',
        pincode: '',
        country: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return { formData, handleChange, setFormData };
}

export default profileEditForm;
