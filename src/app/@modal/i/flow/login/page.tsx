import LoginModal from "@/app/_components/LoginModal";
import { modalLayout } from "@/app/_styles/modalStyle";
export default function page() {
    return (
        <div className={modalLayout}>
            <LoginModal />
        </div>
    )
}