import AccountManage from "@src/components/AccountManage";
import CartButton from "@src/components/CartButton";
import CategoryPills from "@src/components/CategoryPills";
import Header from "@src/components/Header";
import HomeButton from "@src/components/HomeButton";
import Messages from "@src/components/Messages";
import Topbar from "@src/components/Topbar";
import TopbarLeft from "@src/components/TopbarLeft";
import TopbarRight from "@src/components/TopbarRight";
import BaseLayout from "@src/layouts/BaseLayout";

import HeaderMenu from "@src/components/HeaderMenu";
import { usePage } from "@inertiajs/react";
import { Page } from "@inertiajs/inertia";
import CartRow from "@src/Pages/cart/components/CartRow";
import CheckoutButton from "@src/Pages/cart/components/CheckoutButton";


export default function CarrelloPage() {
    const page = usePage<Page<{ cart?: any }>>();
    const { cart } = page.props;

    const { items, total } = cart;

    const content = () => {
        if (Object.keys(items).length > 0) {
            return <>
                <div className="flex flex-col">
                    <div className="w-full">
                        <table className="flex flex-col">
                            <thead>
                                <tr className='flex'>
                                    <th className="w-3/6 text-left">Cibo</th>
                                    <th className="w-1/6 text-center">Quantità</th>
                                    <th className="w-1/6 text-center">Prezzo</th>
                                    <th className="w-1/6 text-center">Azioni</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(items).map((row: any) => <CartRow actionsVisible={true} row={row} key={row.item.id}></CartRow>)}
                            </tbody>
                            <tfoot>
                                <tr className='flex text-center pt-2'>
                                    <td className="w-3/6"></td>
                                    <td className="w-1/6 font-semibold">Totale</td>
                                    <td className="w-1/6">{total.toFixed(2)} €</td>
                                    <td className="w-1/6"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="w-full">
                        <CheckoutButton></CheckoutButton>
                    </div>
                </div>
            </>

        } else {
            return <>
                <p>Non ci sono elementi nel carrello</p>
            </>
        }
    }

    return <>
        <BaseLayout title="Carrello">
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
                <CategoryPills></CategoryPills>
            </HeaderMenu>
            <Messages></Messages>
            <div className="p-8">
                {content()}
            </div>
        </BaseLayout>
    </>
}
