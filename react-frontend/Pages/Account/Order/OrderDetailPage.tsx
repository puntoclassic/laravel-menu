import AccountManage from "@react-src/components/AccountManage";
import CartButton from "@react-src/components/CartButton";
import Header from "@react-src/components/Header";
import Messages from "@react-src/components/Messages";
import Topbar from "@react-src/components/Topbar";
import TopbarLeft from "@react-src/components/TopbarLeft";
import TopbarRight from "@react-src/components/TopbarRight";
import BaseLayout from "@react-src/layouts/BaseLayout";
import HeaderMenu from "@react-src/components/HeaderMenu";
import BreadcrumbLink from "@react-src/components/BreadcrumbLink";
import HomeButton from "@react-src/components/HomeButton";
import LoadingContent from "@react-src/components/LoadingContent";
import { router, usePage } from "@inertiajs/react";
import { GetOrderDetailResponse, OrderDetail, OrderDetailRow } from "@react-src/types";
import route from "ziggy-js";



export default function OrderDetailPage() {

    const page = usePage<{ order: GetOrderDetailResponse }>();
    const { order } = page.props;

    console.log(order);

    const paga = async () => {

        const request = await fetch(route("ordini.paga", {
            order: order.id
        }))
        var data = await request.json();
        window.location.href = data.redirect_url;
    }

    return <>
        <BaseLayout title="I miei ordini">
            <Topbar>
                <TopbarLeft>
                    <HomeButton></HomeButton>
                </TopbarLeft>
                <TopbarRight>
                    <CartButton></CartButton>
                    <AccountManage></AccountManage>
                </TopbarRight>
            </Topbar>
            <Header></Header>
            <HeaderMenu>
                <ol className="flex h-16 flex-row space-x-2 items-center pl-8 text-white">
                    <li>
                        <BreadcrumbLink href={route("account.dashboard")}>
                            Profilo
                        </BreadcrumbLink>
                    </li>
                    <li>::</li>
                    <li>
                        <BreadcrumbLink href={route("ordini.list")}>
                            I miei ordini
                        </BreadcrumbLink>
                    </li>
                    <li>::</li>
                    <li>Dettaglio ordine</li>
                </ol>
            </HeaderMenu>

            <div className="pl-8 pr-8 flex flex-grow flex-col py-4 space-y-4">
                <Messages></Messages>
                <div className="w-full pb-4">
                    <p className="text-2xl antialiased font-bold">Dettagli ordine</p>
                </div>
                <div className="w-full flex flex-col">
                    <b>Stato dell'ordine</b>
                    <span>{order.order_status?.name}</span>
                </div>
                {order.is_paid ? <></> : <>
                    <div className="w-full flex flex-col items-start">
                        <b>Azioni sull'ordine</b>
                        <button onClick={() => paga
                            ()} className="btn btn-sm btn-success">Paga ora</button>
                    </div>

                </>}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <b>Cosa c'è nel tuo ordine</b>
                    <div className="p-4 bg-slate-100">
                        <table className="p-4 w-full">
                            <thead>
                                <tr>
                                    <th className="text-left">Cibo</th>
                                    <th className="text-center" scope="col">Quantità</th>
                                    <th className="text-center" scope="col">Prezzo</th>
                                </tr>
                            </thead>
                            <tbody>

                                {order.order_details?.map((row: OrderDetailRow) => {
                                    return <tr className="align-middle" key={row.id}>
                                        <td>{row.name}</td>
                                        <td className="text-center">{row.quantity}</td>
                                        <td className="text-center">{row.unit_price.toFixed(2)} €</td>
                                    </tr>

                                })}
                                {order.is_shipping_required ? <>
                                    <tr className="align-middle" key="none">
                                        <td>Spese di consegna</td>
                                        <td className="text-center">1</td>
                                        <td className="text-center">{order.shipping_costs.toFixed(2)} €</td>
                                    </tr>

                                </> : null}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td className="text-center">
                                        <b>Totale</b>
                                    </td>
                                    <td className="text-center">{order.total.toFixed(2)} €</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </BaseLayout >
    </>
}