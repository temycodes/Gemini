import styled from 'styled-components';

export const Nav = styled.nav`
    z-index:50;
    position:sticky;
    top: 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding-left:20px;
    padding-right:20px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    
    a {
        text-decoration:none;
        color:inherit;
    }

    .logo {
        padding:15px 0;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    list-style:none;
    flex-flow:row nowrap;
    font-weight: 400;


    @media screen and (max-width:768px) {
        align-items:center;
        position:fixed;
        z-index:-1;
        right:0;
        top:0;
        height:100vh;
        width:80%;
        padding-top:3.5rem;
        flex-direction:column;
        transition:0.3s ease-in-out;
        transform: ${({open})=> open ? 'translateX(0)' : 'translateX(100%)'};
        background-color:white;
   
    }

    li {
        padding:18px 30px;
        line-height:28px;
        font-size: 16px;
    }

    @media screen and (max-width:768px) {

        p {
            display:block;
            margin-block-start: 1em;
            margin-block-end: 1em;
        }

        li {
            position: relative;
            color: rgb(1, 3, 4);
            height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            border-bottom: 0.5px solid grey;
        }
    }
`

export const NavBar = styled.ul `
    display:flex;
    align-items:end;
    list-style:none;
    flex-flow:row nowrap;

    li {
        padding:18px 10px;
        line-height: 28px;
        font-size: 14px
        color: rgb(1, 3, 4);
    }

    @media screen and (max-width:768px) {
        margin-left: 20px;
    }
`
export const Bars = styled.div`
    width: 2rem;
    height: 2rem;
    display: none;
    z-index:100;
    display:none;

    @media (max-width:768px){
        display:flex;
        justify-content: space-around;
        flex-flow:column nowrap;
    }

    div {
        width: 2rem;
        height:0.25rem;
        background-color:${({open}) => open ? '#ccc' : '#333'};
        border-radius:10px;
        cursor:pointer;
        transform-origin:1px;
        transition:all 0.5s linear;

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'}
        }
        &:nth-child(2) {
            transform: ${({open}) => open ? 'translate(100%)' : 'translate(0)'};
            opacity:${({open}) => open ? 0:1}
        }
        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
    }
`;

// export const NavLink = styled(Link)`
//     color:#fff;
//     display:flex;
//     align-items: center;
//     text-decoration:none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor:pointer;
// `;

// export const NavBtn = styled.nav `
//     display:flex;
//     align-items:end;
//     margin-right: 24px;
//     color:white;
//     @media screen and (max-width:768px) { 
//         display:none;
//     }
// `

// export const NavBtnLink = styled(Link)`
//     border-radius:4px;
//     background:#fff;
//     padding:10px 22px;
//     color:#000000;
//     outline:none;
//     border:none;
//     cursor:pointer;
//     transition:all 0.2s ease-in-out;
//     text-decoration:none;
//     margin-left:24px;
//     &:hover {
//         transition:all 0.2s ease-in-out;;
//         background:black;
//         color:#000000;
//     }
// `