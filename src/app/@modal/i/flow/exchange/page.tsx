import { modalLayout } from "@/app/_styles/modalStyle";
import ExchangeModal from "./_components/ExchangeModal";

export default function page() {
    return (
        <div className={modalLayout}>
            <ExchangeModal />
        </div>
    )
}