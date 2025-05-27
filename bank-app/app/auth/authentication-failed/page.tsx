'use client'
interface Props {};
const LoginAuthFailed: React.FC<Props>=({})=>{


    const closeSessionCookie = () =>{
        const homepageRedirect = `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}` || '';
        window.location.replace(homepageRedirect);
    };

    return (
      <div>Authentication failed. Redirect to <a onClick={closeSessionCookie} style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}}>home page</a>...</div>
    )
};

export default LoginAuthFailed;