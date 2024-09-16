"use client"
import { Grid } from "@mui/material";
import Appbar from '@/app/components/Appbar/Appbar';
import Sidebar from "@/app/components/Sidebar/Sidebar";
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";
import { useGetData } from '../../context/GetDataContext';

interface Props {};
const BillManagement: React.FC<Props>=({})=>{
    const { pageLoading } = useGetData();

    return (
        <>
            {
                pageLoading
                ?
                    <LoadingScreen/>
                :
                    <>
                        <Sidebar namefromApp={"manage-bills"} />
                        <main id="content">
                            <Appbar />

                            <section className="container">

                                <ul className="ben-page-nav ben-page-nav-tabs" id="PageNavigator">
                                    <li className="ben-page-nav-item">
                                        <a className="ben-page-nav-link active">BILLS MANAGER</a>
                                    </li>
                                </ul>


                                <div className="ben-groom-panel">
                                    <div>
                                        <div style={{paddingTop: '3rem'}}></div>
                                        <div className="ben-groom-panel-inner">
                                            <div className="ben-groom-panel-inner-measure">

                                                <Grid container style={{justifyContent:'center', alignItems: 'center', padding: '3rem 0'}}>
                                                    <Grid xs={12} sm={7} item>
                                                        <div style={{textAlign: 'center', marginTop: '3rem'}}>
                                                            <svg width="100" height="4rem" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="50" fill="#FAF5EB"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M36.4645 33.1311C37.4021 32.1934 38.6739 31.6667 40 31.6667H53.3333C53.7754 31.6667 54.1993 31.8423 54.5118 32.1548L64.5118 42.1548C64.8244 42.4674 65 42.8913 65 43.3333V63.3333C65 64.6594 64.4732 65.9312 63.5355 66.8689C62.5979 67.8065 61.3261 68.3333 60 68.3333H40C38.6739 68.3333 37.4021 67.8065 36.4645 66.8689C35.5268 65.9312 35 64.6594 35 63.3333V36.6667C35 35.3406 35.5268 34.0688 36.4645 33.1311ZM40 35C39.558 35 39.134 35.1756 38.8215 35.4882C38.5089 35.8007 38.3333 36.2246 38.3333 36.6667V63.3333C38.3333 63.7754 38.5089 64.1993 38.8215 64.5118C39.134 64.8244 39.558 65 40 65H60C60.442 65 60.8659 64.8244 61.1785 64.5118C61.4911 64.1993 61.6667 63.7754 61.6667 63.3333V44.0237L52.643 35H40Z" fill="#d1a23c"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M53.3333 31.6667C54.2538 31.6667 55 32.4129 55 33.3333V41.6667H63.3333C64.2538 41.6667 65 42.4129 65 43.3333C65 44.2538 64.2538 45 63.3333 45H53.3333C52.4129 45 51.6667 44.2538 51.6667 43.3333V33.3333C51.6667 32.4129 52.4129 31.6667 53.3333 31.6667Z" fill="#d1a23c"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.6667 51.6667C41.6667 50.7462 42.4129 50 43.3333 50H56.6667C57.5871 50 58.3333 50.7462 58.3333 51.6667C58.3333 52.5871 57.5871 53.3333 56.6667 53.3333H43.3333C42.4129 53.3333 41.6667 52.5871 41.6667 51.6667Z" fill="#d1a23c"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.6667 58.3333C41.6667 57.4129 42.4129 56.6667 43.3333 56.6667H56.6667C57.5871 56.6667 58.3333 57.4129 58.3333 58.3333C58.3333 59.2538 57.5871 60 56.6667 60H43.3333C42.4129 60 41.6667 59.2538 41.6667 58.3333Z" fill="#d1a23c"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.6667 45C41.6667 44.0795 42.4129 43.3333 43.3333 43.3333H46.6667C47.5871 43.3333 48.3333 44.0795 48.3333 45C48.3333 45.9205 47.5871 46.6667 46.6667 46.6667H43.3333C42.4129 46.6667 41.6667 45.9205 41.6667 45Z" fill="#d1a23c"></path></svg>

                                                            <h5 className="bill-manage-form-heading">You dont have any active bills</h5>
                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>

                        </main>
                    </>
            }
        </>
       
    )
};

export default BillManagement;