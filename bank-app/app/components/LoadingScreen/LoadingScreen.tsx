import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'redirecting...',
};

const LoadingScreen: React.FC= () => {

  return (
    <section id='redirecting'>
        <div className="arc"></div>
        <h1><span>LOADING</span></h1>
    </section>
  )
};

export default LoadingScreen;