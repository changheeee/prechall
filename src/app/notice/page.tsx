import Board from "../_components/Board"

export default function page() {
    return (
        <>
            <Board title="공지사항" boardType="notice" isAdmin={true} />
        </>
    )
}

