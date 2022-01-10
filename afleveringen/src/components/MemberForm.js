import { useNavigate } from "react-router-dom";

export default function MemberForm() {
    const navigate = useNavigate();
    function handleMembershipSubmit(e) {
        e.preventDefault();
        navigate("/");
    }
    return (
        <form onSubmit={handleMembershipSubmit} action='/'>
            <button type='submit'>BLIV MEDLEM AF KUNDEKLUBBEN</button>
        </form>
    );
}
