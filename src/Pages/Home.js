import React, { useReducer } from 'react'
import pic1 from '../Images/pic1.webp'

import student1 from '../Images/student1.webp'
import student2 from '../Images/student2.webp'
import student3 from '../Images/student3.webp'

import img1 from '../Images/img1.webp'
import img2 from '../Images/img2.webp'
import img3 from '../Images/img3.webp'
import img4 from '../Images/img4.webp'
import img5 from '../Images/img5.webp'
import img6 from '../Images/img6.webp'
import img7 from '../Images/img7.webp'
import img8 from '../Images/img8.webp'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function Home() {
    const initialState = {
        TextShown1: false,
        TextShown2: false,
        TextShown3: false,
        TextShown4: false,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Toggle-Text1':
                return { ...state, TextShown1: !state.TextShown1 };
            case 'Toggle-Text2':
                return { ...state, TextShown2: !state.TextShown2 };
            case 'Toggle-Text3':
                return { ...state, TextShown3: !state.TextShown3 };
            case 'Toggle-Text4':
                return { ...state, TextShown4: !state.TextShown4 };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const dataSvg = [
        {
            title: "Build Your Recipient Profile",
            description: "Build your recipients profile, by telling us a bit about them",
            icon: (
                <svg className="w-11 md:w-16 h-11 md:h-16 fill-gray-500" viewBox="0 0 491.52 491.52">
                    <g>
                        <g>
                            <path className='fill-gray-500' d="M491.52,419.84V0H0v419.84h153.6v51.2h-40.96v20.48h266.24v-20.48h-40.96v-51.2H491.52z M20.48,20.48h450.56v327.68H20.48
                            V20.48z M317.44,471.04H174.08v-51.2h143.36V471.04z M20.48,399.36v-30.72h450.56v30.72H20.48z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className='fill-gray-500' d="M143.36,40.96c-25.97,0-47.1,21.13-47.1,47.1c0,25.98,21.13,47.11,47.1,47.11c25.97,0,47.1-21.13,47.1-47.11
                            C190.46,62.09,169.33,40.96,143.36,40.96z M143.36,114.69c-14.68,0-26.62-11.95-26.62-26.63s11.94-26.62,26.62-26.62
                            s26.62,11.94,26.62,26.62S158.04,114.69,143.36,114.69z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className='fill-gray-500' d="M199.01,141.17l-11.71-3.46l-43.94,34.18l-43.94-34.18l-11.75,3.47c-27.94,8.39-46.71,33.62-46.71,62.78v41.8h204.8v-41.8
                            C245.76,174.8,226.99,149.57,199.01,141.17z M225.28,225.28H61.44v-21.32c0-20.05,12.91-37.4,32.07-43.15l1.63-0.48l48.22,37.5
                            l48.22-37.5l1.59,0.47c19.2,5.76,32.11,23.11,32.11,43.16V225.28z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className='fill-gray-500' d="M385.06,59.39c-13.74,0-26.86,5.04-36.9,13.88c-10.04-8.84-23.16-13.88-36.9-13.88c-30.47,0-55.26,24.29-55.26,54.14
                            c0,59.65,83.35,110.22,86.9,112.35l5.07,3.03l5.16-2.87c3.56-1.97,87.19-49.11,87.19-112.51
                            C440.32,83.68,415.53,59.39,385.06,59.39z M348.33,205.05c-17.17-11.38-71.85-50.8-71.85-91.52c0-18.56,15.6-33.66,34.78-33.66
                            c11.38,0,22.06,5.43,28.58,14.52l8.32,11.6l8.32-11.6c6.52-9.09,17.2-14.52,28.58-14.52c19.18,0,34.78,15.1,34.78,33.66
                            C419.84,156.96,365.53,194.31,348.33,205.05z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <rect x="40.96" y="266.24" width="409.6" height="20.48" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <rect x="40.96" y="307.2" width="235.52" height="20.48" />
                        </g>
                    </g>
                </svg>

            ),
            // icon: (
            //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-11 md:w-16 h-11 md:h-16">
            //         <path className='text-gray-500' stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            //     </svg>

            // ),

        },
        {
            title: "Generate Your Cards",
            description: "Based on the profile and message theme, we will generate the cards and messages for you",
            icon: (<svg className="w-11 md:w-16 h-11 md:h-16" id="Capa_1" viewBox="0 0 444.146 444.146" xmlSpace="preserve">
                <g>
                    <path className='fill-gray-500' d="M163.09,315.913c1.875,1.875,4.418,2.929,7.071,2.929s5.196-1.053,7.071-2.929l23.095-23.096l39.769,39.76
                c1.953,1.952,4.511,2.928,7.07,2.928s5.119-0.977,7.071-2.929l59.7-59.7c9.859-9.859,15.289-22.972,15.289-36.921
                s-5.43-27.062-15.293-36.925c-9.875-9.863-22.986-15.295-36.917-15.295c-10.828,0-21.156,3.277-29.851,9.362
                c-8.694-6.083-19.023-9.36-29.854-9.36c-13.948,0-27.062,5.432-36.926,15.296c-5.925,5.925-10.255,13.031-12.771,20.867
                c-4.973-2.466-10.481-3.782-16.193-3.782c-9.75,0-18.917,3.797-25.811,10.691c-14.232,14.232-14.232,37.389,0,51.622
                L163.09,315.913z M217.312,203.739c8.606,0,16.697,3.352,22.784,9.438c3.907,3.906,10.238,3.906,14.142,0
                c6.089-6.088,14.178-9.441,22.779-9.441c8.594,0,16.685,3.354,22.779,9.441c6.082,6.082,9.431,14.171,9.431,22.779
                s-3.349,16.697-9.431,22.779l-52.63,52.63l-32.696-32.689l0.242-0.242c14.232-14.232,14.232-37.39,0-51.622
                c-6.194-6.194-14.224-9.878-22.861-10.564c0.829-1.067,1.708-2.101,2.677-3.07C200.615,207.091,208.706,203.739,217.312,203.739z
                M139.752,240.953c3.117-3.117,7.261-4.833,11.668-4.833c4.408,0,8.552,1.717,11.669,4.833c1.875,1.875,4.419,2.929,7.071,2.929
                c2.652,0,5.196-1.054,7.071-2.929c3.117-3.117,7.261-4.833,11.668-4.833s8.552,1.717,11.668,4.833
                c6.435,6.434,6.434,16.903,0,23.338L170.161,294.7l-30.409-30.409C133.318,257.857,133.318,247.388,139.752,240.953z"/>
                    <path className='fill-gray-500' d="M434.146,116.22h-58.407V51.124c0-3.015-1.36-5.868-3.701-7.767c-2.342-1.899-5.416-2.639-8.364-2.017L8.031,116.416
                C3.451,117.331,0,121.372,0,126.22v266.802c0,5.523,4.477,10,10,10h424.146c5.523,0,10-4.477,10-10V126.22
                C444.146,120.698,439.669,116.22,434.146,116.22z M355.739,116.22h-249.95l249.95-52.765V116.22z M424.146,383.022H20V136.22
                h404.146V383.022z"/>
                </g>
            </svg>),
        },
        {
            title: "We Mail It",
            description: "Pick your favorite cards and based on the event date, we'll mail it for you!",
            icon: (
                <svg className="w-11 md:w-16 h-11 md:h-16" id="Capa_1"
                    viewBox="0 0 410.51 410.51">
                    <g>
                        <g>
                            <path className='fill-gray-500' d="M308.519,167.412c-1.163-7.624-6.767-13.706-13.944-15.135c-4.56-0.908-9.077,0.229-12.809,3.019
			c-3.73-2.788-8.248-3.923-12.808-3.019c-7.177,1.429-12.78,7.511-13.943,15.134c-0.862,5.65-0.261,20.212,23.879,33.38
			c0.912,0.498,1.896,0.733,2.868,0.733l0.005-0.02l0.005,0.02c0.972,0,1.956-0.235,2.868-0.733
			C308.781,187.624,309.382,173.062,308.519,167.412z M281.767,188.605c-15.101-9.12-15.242-17.066-14.89-19.384
			c0.465-3.043,2.619-4.816,4.424-5.175c2.502-0.498,4.285,1.46,5.334,3.191l0.002-0.001c0.485,0.803,1.164,1.505,2.022,2.025
			c2.835,1.716,6.523,0.81,8.24-2.025c1.048-1.731,2.824-3.689,5.332-3.191c1.806,0.359,3.96,2.132,4.425,5.176
			C297.011,171.54,296.869,179.486,281.767,188.605z"/>
                            <path className='fill-gray-500' d="M404.51,248.182h-30.853c0.303-1.221,0.481-2.489,0.481-3.803V144.326c0-8.713-7.089-15.802-15.802-15.802h-4.804
			c-15.262-22.676-36.235-34.174-62.393-34.174h-58.974V20.036c0-3.313-2.686-6-6-6h-95.811c-3.313,0-6,2.687-6,6v35.782
			c0,3.314,2.687,6,6,6h70.938V94.35H89.873c-21.071,0-38.924,7.557-53.063,22.46C-4.26,160.102,0.015,250.665,0.218,254.499
			c0.168,3.186,2.8,5.684,5.991,5.684h152.149v130.291c0,3.313,2.687,6,6,6h39.132c3.313,0,6-2.687,6-6V260.182h195.02
			c3.313,0,6-2.686,6-6C410.51,250.869,407.823,248.182,404.51,248.182z M358.337,140.524c1.718,0,3.156,1.153,3.626,2.72
			c-10.722,9.661-58.076,52.264-66.856,58.957c-5.992,4.566-13.076,4.655-13.286,4.656c-0.018-0.001-0.037-0.001-0.057-0.001
			c-0.017,0-0.033,0.002-0.05,0.003c-0.014,0-0.025-0.002-0.039-0.002h-0.005c-0.218,0-7.234-0.073-13.248-4.656
			c-4.347-3.313-19.753-16.771-43.511-38.007c2.784-8.32,6.214-16.364,10.466-23.67H358.337z M248.581,201.165l-34.886,28.629
			c0.712-14.512,2.638-33.811,7.479-52.848C232.668,187.202,241.821,195.291,248.581,201.165z M338.521,128.524h-94.808
			c0.991-1.188,2.012-2.342,3.068-3.455c11.783-12.421,26.708-18.719,44.357-18.719C310.3,106.35,326.186,113.815,338.521,128.524z
			 M136.355,49.818V26.036h83.811v23.782H136.355z M220.166,61.818V94.35h-6.873V61.818H220.166z M45.515,125.069
			C57.3,112.648,72.223,106.35,89.873,106.35h160.495c-4.36,2.953-8.467,6.428-12.292,10.461
			c-35.335,37.247-37.102,109.483-36.779,131.372H12.056C11.825,227.933,13.51,158.807,45.515,125.069z M170.358,384.473V260.182
			h27.132v124.291H170.358z M213.324,248.182c-0.009-0.771-0.014-1.64-0.015-2.549l44.538-36.549
			c1.392,1.156,2.497,2.048,3.301,2.66c8.901,6.785,18.998,7.102,20.511,7.11c0.005,0,0.01,0.001,0.016,0.001
			c0.012,0,0.044,0,0.07,0c0.016,0,0.021,0,0.041,0h0.07c0.006,0,0.011-0.001,0.016-0.001c1.513-0.009,11.606-0.325,20.508-7.11
			c0.818-0.624,1.938-1.528,3.301-2.661l47.646,39.099H213.324z M362.138,239.891l-47.193-38.727
			c13.93-12.104,34.86-30.848,47.193-41.933V239.891z"/>
                        </g>
                    </g>
                </svg>
            ),
        }
    ]

    const dataGetCard = [
        {
            title: "4 Greeting Cards",
            description: "4 physical greeting cards every month with custom messages built from your recipients profile",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="1024968870" className='w-12 md:w-16' data-icon-name="li-cards"> <g> <path className='fill-gray-500' d="M45.1,53.9c0.4,0,0.8-0.2,1.1-0.6l6.1-10.4c0.8-1.4,1.1-3.1,0.6-4.7c-0.4-1.6-1.5-3-2.9-3.8c-2.9-1.7-6.9-0.6-8.5,2.3
            c-0.1,0.3-0.3,0.5-0.4,0.8c-0.2-0.2-0.5-0.3-0.7-0.5c-2.9-1.7-6.9-0.6-8.5,2.3c-0.8,1.4-1.1,3.1-0.6,4.7c0.4,1.6,1.5,3,2.9,3.8
            l10.4,6C44.7,53.8,44.9,53.9,45.1,53.9z M33.6,43.3c-0.3-1-0.1-2,0.4-2.8c0.7-1.2,1.9-1.9,3.3-1.9c0.7,0,1.3,0.2,1.9,0.5
            c0.9,0.5,1.5,1.3,1.7,2.3l0,0c0.2,0.7,0.9,1.1,1.5,0.9c0.7-0.2,1.1-0.9,0.9-1.5c-0.3-1-0.1-2,0.4-2.8c1-1.7,3.4-2.4,5.1-1.4
            c0.9,0.5,1.5,1.3,1.7,2.3c0.3,1,0.1,2-0.4,2.8l-5.5,9.4l-9.3-5.4C34.4,45.1,33.8,44.2,33.6,43.3z"></path>
                <path className='fill-gray-500' d="M83.4,30.6c-0.7-1.2-1.8-2.1-3.2-2.4l-8.5-2.3v-2.7c0-2.9-2.4-5.2-5.2-5.2h-8.7l-0.7-2.6c-0.7-2.7-3.7-4.4-6.4-3.7L19.8,20
            c-1.4,0.4-2.5,1.2-3.2,2.4c-0.7,1.2-0.9,2.6-0.5,4l13.5,50.2c0.5,1.8,1.9,3.2,3.6,3.7v0.1l30.9,8.3c0.4,0.1,0.9,0.2,1.4,0.2
            c0.9,0,1.8-0.2,2.6-0.7c1.2-0.7,2.1-1.8,2.4-3.2L84,34.8C84.3,33.2,84.1,31.8,83.4,30.6z M66.5,20.4c1.5,0,2.8,1.2,2.8,2.8v37.5
            L58.5,20.4H66.5z M31.9,75.8L18.5,25.6c-0.2-0.7-0.1-1.4,0.3-2.1c0.4-0.6,1-1.1,1.7-1.3l30.9-8.3c0.2-0.1,0.5-0.1,0.7-0.1
            c1.3,0,2.3,0.8,2.7,2L68.3,66c0.4,1.5-0.5,3-1.9,3.4l-30.9,8.3C33.9,78.1,32.3,77.2,31.9,75.8z M69.2,70.4v4.7
            c0,1.5-1.2,2.7-2.8,2.7H44.6l22.3-6C67.8,71.6,68.6,71.1,69.2,70.4z M68.1,84.1c-0.2,0.7-0.6,1.3-1.3,1.7c-0.6,0.4-1.4,0.5-2.1,0.3
            l-21.3-5.7h23.1c1,0,2-0.3,2.8-0.8L68.1,84.1z M81.5,33.9l-9.8,36.5v-42l7.8,2.1c0.7,0.2,1.3,0.6,1.7,1.3
            C81.6,32.4,81.7,33.2,81.5,33.9z"></path>
            </g>
            </svg>),
        },
        {
            title: "Calendar View",
            description: "A Calendar view that shows you all your upcoming occasions for every month",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792" id="1944968044" className="w-11 md:w-12 h-11 md:h-12" data-icon-name="fa-calendar"> <path className='fill-gray-500' fill="inherit" d="M128 1664h288v-288h-288v288zM480 1664h320v-288h-320v288zM128 1312h288v-320h-288v320zM480 1312h320v-320h-320v320zM128 928h288v-288h-288v288zM864 1664h320v-288h-320v288zM480 928h320v-288h-320v288zM1248 1664h288v-288h-288v288zM864 1312h320v-320h-320v320zM512 448v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zM1248 1312h288v-320h-288v320zM864 928h320v-288h-320v288zM1248 928h288v-288h-288v288zM1280 448v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zM1664 384v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"></path>
            </svg>),
        },
        {
            title: "Notification Reminders",
            description: "We will send you notification reminders of upcoming events, so you never miss another special moment.",
            icon: (<svg className="w-11 md:w-14 h-11 md:h-14" viewBox="0 0 256.00098 256.00098" id="Flat" xmlns="http://www.w3.org/2000/svg">
                <path className='fill-gray-500' d="M216.00049,52.00049h-176a12.01343,12.01343,0,0,0-12,12V222.82422a11.88727,11.88727,0,0,0,6.93359,10.87793,12.05387,12.05387,0,0,0,5.09766,1.14111,11.91739,11.91739,0,0,0,7.69043-2.83349l32.2959-27.14942,2.35937-.85986H216.00049a12.01343,12.01343,0,0,0,12-12v-128A12.01343,12.01343,0,0,0,216.00049,52.00049Zm4,140a4.00428,4.00428,0,0,1-4,4H81.67139a3.99389,3.99389,0,0,0-1.37012.24219l-3.68555,1.34277a4.01,4.01,0,0,0-1.20508.69678l-32.83691,27.604a3.99985,3.99985,0,0,1-6.57324-3.062V64.00049a4.00426,4.00426,0,0,1,4-4h176a4.00427,4.00427,0,0,1,4,4Zm-56-80.00049a4.0002,4.0002,0,0,1-4,4h-64a4,4,0,0,1,0-8h64A4.0002,4.0002,0,0,1,164.00049,112Zm0,32a4.0002,4.0002,0,0,1-4,4h-64a4,4,0,0,1,0-8h64A4.0002,4.0002,0,0,1,164.00049,144Z" />
            </svg>),
        },
        {
            title: "Mailed Cards",
            description: "We mail the greeting cards you picked directly to your recipient!",
            icon: (<svg className="w-11 md:w-16 h-11 md:h-16" id="Capa_1"
                viewBox="0 0 410.51 410.51">
                <g>
                    <g>
                        <path className='fill-gray-500' d="M308.519,167.412c-1.163-7.624-6.767-13.706-13.944-15.135c-4.56-0.908-9.077,0.229-12.809,3.019
    c-3.73-2.788-8.248-3.923-12.808-3.019c-7.177,1.429-12.78,7.511-13.943,15.134c-0.862,5.65-0.261,20.212,23.879,33.38
    c0.912,0.498,1.896,0.733,2.868,0.733l0.005-0.02l0.005,0.02c0.972,0,1.956-0.235,2.868-0.733
    C308.781,187.624,309.382,173.062,308.519,167.412z M281.767,188.605c-15.101-9.12-15.242-17.066-14.89-19.384
    c0.465-3.043,2.619-4.816,4.424-5.175c2.502-0.498,4.285,1.46,5.334,3.191l0.002-0.001c0.485,0.803,1.164,1.505,2.022,2.025
    c2.835,1.716,6.523,0.81,8.24-2.025c1.048-1.731,2.824-3.689,5.332-3.191c1.806,0.359,3.96,2.132,4.425,5.176
    C297.011,171.54,296.869,179.486,281.767,188.605z"/>
                        <path className='fill-gray-500' d="M404.51,248.182h-30.853c0.303-1.221,0.481-2.489,0.481-3.803V144.326c0-8.713-7.089-15.802-15.802-15.802h-4.804
    c-15.262-22.676-36.235-34.174-62.393-34.174h-58.974V20.036c0-3.313-2.686-6-6-6h-95.811c-3.313,0-6,2.687-6,6v35.782
    c0,3.314,2.687,6,6,6h70.938V94.35H89.873c-21.071,0-38.924,7.557-53.063,22.46C-4.26,160.102,0.015,250.665,0.218,254.499
    c0.168,3.186,2.8,5.684,5.991,5.684h152.149v130.291c0,3.313,2.687,6,6,6h39.132c3.313,0,6-2.687,6-6V260.182h195.02
    c3.313,0,6-2.686,6-6C410.51,250.869,407.823,248.182,404.51,248.182z M358.337,140.524c1.718,0,3.156,1.153,3.626,2.72
    c-10.722,9.661-58.076,52.264-66.856,58.957c-5.992,4.566-13.076,4.655-13.286,4.656c-0.018-0.001-0.037-0.001-0.057-0.001
    c-0.017,0-0.033,0.002-0.05,0.003c-0.014,0-0.025-0.002-0.039-0.002h-0.005c-0.218,0-7.234-0.073-13.248-4.656
    c-4.347-3.313-19.753-16.771-43.511-38.007c2.784-8.32,6.214-16.364,10.466-23.67H358.337z M248.581,201.165l-34.886,28.629
    c0.712-14.512,2.638-33.811,7.479-52.848C232.668,187.202,241.821,195.291,248.581,201.165z M338.521,128.524h-94.808
    c0.991-1.188,2.012-2.342,3.068-3.455c11.783-12.421,26.708-18.719,44.357-18.719C310.3,106.35,326.186,113.815,338.521,128.524z
     M136.355,49.818V26.036h83.811v23.782H136.355z M220.166,61.818V94.35h-6.873V61.818H220.166z M45.515,125.069
    C57.3,112.648,72.223,106.35,89.873,106.35h160.495c-4.36,2.953-8.467,6.428-12.292,10.461
    c-35.335,37.247-37.102,109.483-36.779,131.372H12.056C11.825,227.933,13.51,158.807,45.515,125.069z M170.358,384.473V260.182
    h27.132v124.291H170.358z M213.324,248.182c-0.009-0.771-0.014-1.64-0.015-2.549l44.538-36.549
    c1.392,1.156,2.497,2.048,3.301,2.66c8.901,6.785,18.998,7.102,20.511,7.11c0.005,0,0.01,0.001,0.016,0.001
    c0.012,0,0.044,0,0.07,0c0.016,0,0.021,0,0.041,0h0.07c0.006,0,0.011-0.001,0.016-0.001c1.513-0.009,11.606-0.325,20.508-7.11
    c0.818-0.624,1.938-1.528,3.301-2.661l47.646,39.099H213.324z M362.138,239.891l-47.193-38.727
    c13.93-12.104,34.86-30.848,47.193-41.933V239.891z"/>
                    </g>
                </g>
            </svg>),
        }
    ]

    const dataTestimonials = [
        {
            title: "Caralynn W.",
            title2: "Bussiness Student",
            description: "“I was failing math and really frustrated. Tutoring helped me understand the material and now I’m at the top of my class.”",
            icon: (<svg viewBox="0 0 198 198" className='w-10 md:w-12 h-10 md:h-12 fill-[#FC5C66] mx-auto'>
                <g>
                    <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297
c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"/>
                    <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297
c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"/>
                </g>
            </svg>),
            student: student1
        },
        {
            title: "Brian R.",
            title2: "Psychology Student",
            description: "“You really helped me through Basic Chemistry, and this enabled me to get into the program that I really wanted! I can't thank you enough.\"",
            icon: (<svg viewBox="0 0 198 198" className='w-10 md:w-12 h-10 md:h-12 fill-[#FC5C66] mx-auto'>
                <g>
                    <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297
c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"/>
                    <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297
c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"/>
                </g>
            </svg>),
            student: student2
        },
        {
            title: "Rachel L.",
            title2: "Science Student",
            description: "“My tutoring sessions were easy and fun. I did the Small Group program, and highly recommend it for anyone who learns better with others.”",
            icon: (<svg viewBox="0 0 198 198" className='w-10 md:w-12 h-10 md:h-12 fill-[#FC5C66] mx-auto'>
                <g>
                    <path d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297
c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"/>
                    <path d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297
c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"/>
                </g>
            </svg>),
            student: student3
        },
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div>
            <Navbar />
            <section className='landing-main bg-cover bg-center bg-no-repeat flex items-center justify-center relative h-auto'>
                <div className='flex-col md:max-w-6xl max-w-3xl mx-auto h-4/5 text-center z-10 my-12 md:my-24 px-2 sm:px-0'>
                    <h1 className='text-[2.7rem] md:text-7xl leading-snug md:leading-tight my-5 text-white uppercase font-text-comfortaa font-semibold'>Heartfelt MOMENTS MADE EASY</h1>
                    <p className='text-white md:text-3xl text-2xl mt-5 md:mt-10 mb-8 font-text-shadow-italic'>AI Powered Greeting Cards With A Human Touch</p>
                    <span className='flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-around w-3/5 mx-auto'>
                        <button className='w-fit sm:w-[30%]  bg-pink-utility text-white font-semibold rounded-md py-2 px-4 sm:px-2 text-lg md:text-xl border-pink-utility border-2 hover:bg-white hover:text-pink-utility transition-all duration-200 '>Subscribe</button>
                        <button className='w-fit md:w-[30%] bg-white border-pink-utility border-2 text-pink-utility font-semibold rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-pink-utility hover:text-white transition-all duration-200'>Generate Card</button>
                    </span>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className='flex items-center justify-center h-auto my-16 md:my-28 px-4 md:px-0'>
                <div className='max-w-screen-xl text-center w-full'>
                    <h2 className='text-4xl md:text-5xl font-semibold text-main-utility mb-5'>How it Works</h2>
                    <hr className='h-[3px] w-[10%] md:w-[10%] mx-auto rounded-lg bg-pink-utility' />
                    <div className='grid grid-cols-1  sm:grid-cols-3 gap-12 sm:gap-2 md:gap-8 mt-12 md:mt-20'>
                        {dataSvg.map((item, index) => (
                            <div key={index} className='w-4/5 mx-auto sm:w-full p-3 md:p-5 cursor-default h-68 sm:h-76'>
                                <div className='mx-auto p-5 border border-2-[#364957] w-fit rounded-full mb-3'>
                                    {item.icon}
                                </div>
                                <h3 className='text-lg md:text-2xl font-text-shadow-italic font-semibold h-10 sm:h-12 text-main-utility mt-4 mb-1'>{item.title}</h3>
                                <p className='text-main-utility text-base'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REAL GREETINGS CARDS */}
            <section className='flex items-center justify-center bg-slate-50'>
                <div className='flex-col sm:flex-row flex items-center justify-center gap-0 md:gap-10 w-full'>
                    <article className='w-full border'>
                        <span className=''>
                            <img src={pic1} alt="" className='h-[80vh] md:h-[70vh] w-full object-cover' />
                        </span>
                    </article>

                    <article className='w-full px-2 py-10 sm:py-0 sm:pb-10'>
                        <div className='flex flex-col gap-5 sm:gap-10'>
                            <span className=''>
                                <h2 className='text-3xl md:text-5xl font-semibold text-main-utility mb-2 sm:mb-5'>Real Greetings Cards</h2>
                                <hr className='h-[3px] w-[20%] rounded-lg bg-pink-utility' />
                            </span>
                            <p className='text-main-utility text-base md:text-lg'>An amazing collection of high-quality card made from 100% recycled material.</p>
                            <p className='text-pink-utility text-lg md:text-2xl font-normal'>Get our special offer - 30% off</p>
                            <button className='w-fit md:w-[80%] lg:w-[40%] hover:bg-pink-utility hover:text-white font-semibold rounded-full py-3 px-7 md:px-2 text-sm md:text-base border-pink-utility border-2 bg-transparent text-pink-utility transition-all duration-200 uppercase'>Get Started Today!</button>
                        </div>
                    </article>
                </div>
            </section>

            {/* WHAT DO YOU GET */}
            <section className='flex items-center justify-center h-auto my-16 md:my-12'>
                <div className='max-w-screen-xl text-center w-full'>
                    <span>
                        <h2 className='text-4xl md:text-5xl pb-5 font-semibold text-main-utility'>What Do You Get?</h2>
                        <hr className='h-[3px] w-[10%] md:w-[15%] mx-auto rounded-lg bg-pink-utility' />
                    </span>
                    <article className='flex flex-col sm:flex-row items-center gap-12 sm:gap-1 md:gap-10 mt-10 md:mt-20'>
                        {dataGetCard.map((item, index) => (
                            <div key={index} className='flex w-4/5 sm:w-full items-center flex-col justify-between px-2 self-center py-5 h-60 sm:h-72 cursor-default'>
                                <div className='mx-auto p-0 md:p-5 w-fit rounded-full'>
                                    {item.icon}
                                </div>
                                <h3 className='text-xl md:text-2xl font-text-shadow-italic font-semibold text-main-utility mb-2'>{item.title}</h3>
                                <p className='text-main-utility text-sm md:text-base'>{item.description}</p>
                            </div>
                        ))}
                    </article>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className='flex items-center justify-center bg-slate-50'>
                <div className='flex items-center justify-center flex-col gap-12 sm:gap-20 max-w-screen-xl text-center w-full py-16 md:py-20'>
                    <span className='w-full'>
                        <h2 className='text-4xl md:text-5xl font-semibold text-main-utility mb-0 sm:mb-5'>Testimonials</h2>
                        <hr className='h-[3px] w-[10%] mx-auto rounded-lg bg-pink-utility' />
                    </span>
                    <article className='hidden sm:flex items-center sm:items-stretch justify-center gap-16 sm:gap-5 md:gap-10 p-5 w-full'>
                        {dataTestimonials.map((item, index) => (
                            <div key={index} className='height-here text-center w-4/5 sm:w-1/2 md:w-2/5 py-10 bg-white px-5 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300 hover:border-gray-100 border border-transparent'>
                                <div className='rounded-full relative'><img className='absolute -top-16 md:-top-20 rounded-full w-32 sm:w-24 md:w-28 h-32 sm:h-24 md:h-28 left-[28%] sm:left-1/4 md:left-1/3' src={item.student} alt="" /></div>
                                <article>
                                    <div className='mt-28 sm:mt-20 md:mt-28 flex items-center flex-col justify-between h-72'>
                                        <span className='text-center'>
                                            {item.icon}
                                        </span>
                                        <p className='text-main-utility text-base sm:text-sm md:text-base my-4'>{item.description}</p>
                                        <h3 className='text-lg md:text-xl text-main-utility font-semibold mb-0 sm:mb-2 mt-5 md:mt-10'>{item.title}</h3>
                                        <h4 className='text-xl md:text-2xl italic text-main-utility font-normal'>{item.title2}</h4>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </article>

                    {/* For the Mobile */}
                    <article className='block sm:hidden w-11/12 mb-5'>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {dataTestimonials.map((item, index) => (
                                <div key={index} className='height-here text-center w-[88%] mt-7 sm:w-1/2 md:w-2/5 py-10 bg-white px-5 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300 hover:border-gray-100 border mx-auto'>
                                    <div className='rounded-full relative'><img className='absolute -top-16 md:-top-20 rounded-full w-32 sm:w-24 md:w-28 h-32 sm:h-24 md:h-28 left-[30%] sm:left-1/4 md:left-1/3' src={item.student} alt="" /></div>
                                    <article>
                                        <div className='mt-28 sm:mt-20 md:mt-28 flex items-center flex-col justify-between h-72'>
                                            <span className='text-center'>
                                                {item.icon}
                                            </span>
                                            <p className='text-main-utility text-base sm:text-sm md:text-base my-4'>{item.description}</p>
                                            <h3 className='text-lg md:text-xl text-main-utility font-semibold mb-0 sm:mb-2 mt-5 md:mt-10'>{item.title}</h3>
                                            <h4 className='text-xl md:text-2xl text-main-utility font-normal'>{item.title2}</h4>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </Carousel>
                    </article>
                    {/*  */}
                </div>
            </section >

            {/* TRENDING CARDS */}
            <section section className='flex items-center justify-center' >
                <div className='flex items-center justify-center flex-col gap-16 sm:gap-20 max-w-screen-2xl text-center w-full py-20 px-5'>
                    <span className='w-full'>
                        <h2 className='text-4xl md:text-5xl font-semibold text-main-utility mb-5'>Trending Cards</h2>
                        <hr className='h-[3px] w-[10%] mx-auto rounded-lg bg-pink-utility' />
                    </span>
                    <article className="w-11/12">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {[img1, img2, img3, img4, img5, img6, img7, img8].map((imageUrl, index) => {
                                return (
                                    <div className="shadow-md shadow-gray-300 border mx-5 my-0 sm:my-4 py-5" key={index}>
                                        <img src={imageUrl} alt="movie" className="w-full rounded-md" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </article>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section class="bg-gray-900">
                <div class="container px-6 py-12 mx-auto">
                    <h1 class="text-2xl font-semibold lg:text-3xl text-white">Frequently asked questions</h1>

                    <div class="mt-8 space-y-8 lg:mt-12">
                        <div class="p-8 rounded-lg bg-gray-800 cursor-pointer" onClick={() => dispatch({ type: 'Toggle-Text1' })} >
                            <button class="flex items-center justify-between w-full">
                                <h1 class="font-semibold text-white text-start">How i can play for my appoinment ?</h1>
                                <span className='text-gray-200'>
                                    {state.TextShown1 ?
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                            </svg>
                                        </span>
                                        :
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </span>
                                    }
                                </span>
                            </button>
                            <p class={`text-sm text-gray-300 transition-all duration-300 ease ${state.TextShown1 ? 'opacity-100 max-h-[200px] pt-5' : 'max-h-0 overflow-hidden opacity-0'}`}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>

                        <div class="p-8 rounded-lg bg-gray-800 cursor-pointer" onClick={() => dispatch({ type: 'Toggle-Text2' })} >
                            <button class="flex items-center justify-between w-full">
                                <h1 class="font-semibold text-white text-start">How Is the Working Enviorment in Our Company?</h1>
                                <span className='text-gray-200'>
                                    {state.TextShown2 ?
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                            </svg>
                                        </span>
                                        :
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </span>
                                    }
                                </span>
                            </button>
                            <p class={`text-sm text-gray-300 transition-all duration-300 ease ${state.TextShown2 ? 'opacity-100 max-h-[200px] pt-5' : 'max-h-0 overflow-hidden opacity-0'}`}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>

                        <div class="p-8 rounded-lg bg-gray-800 cursor-pointer" onClick={() => dispatch({ type: 'Toggle-Text3' })} >
                            <button class="flex items-center justify-between w-full">
                                <h1 class="font-semibold text-white text-start">How i can play for my appoinment ?</h1>
                                <span className='text-gray-200'>
                                    {state.TextShown3 ?
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                            </svg>
                                        </span>
                                        :
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </span>
                                    }
                                </span>
                            </button>
                            <p class={`text-sm text-gray-300 transition-all duration-300 ease ${state.TextShown3 ? 'opacity-100 max-h-[200px] pt-5' : 'max-h-0 overflow-hidden opacity-0'}`}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>

                        <div class="p-8 rounded-lg bg-gray-800 cursor-pointer" onClick={() => dispatch({ type: 'Toggle-Text4' })} >
                            <button class="flex items-center justify-between w-full">
                                <h1 class="font-semibold text-white text-start">What is the main purpose of our Company? What does it Do?</h1>
                                <span className='text-gray-200'>
                                    {state.TextShown4 ?
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                            </svg>
                                        </span>
                                        :
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </span>
                                    }
                                </span>
                            </button>
                            <p class={`text-sm text-gray-300 transition-all duration-300 ease ${state.TextShown4 ? 'opacity-100 max-h-[200px] pt-5' : 'max-h-0 overflow-hidden opacity-0'}`}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    )
}