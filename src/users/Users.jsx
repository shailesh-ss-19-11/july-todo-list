import axios from "axios";
import UsersTable from "./UsersTable";
import { useEffect, useState } from "react";
import { baseUrl } from "../../constant";

const Users = () => {
    const [userData, setuserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const fetchUserData = async () => {
        const response = await axios.get(baseUrl,
            {
                headers: {
                    "content-type": "application/json",
                    Authorization: "Bearer QXhpb3MgaXMgYSBwcm9taXNlLWJhc2VkIEhUVFAgQ2xpZW50IGZvciBub"
                }
            }
        );
        console.log(response.data);
        setuserData(response.data);
    }

    // fetchUserData();


    useEffect(() => {
        fetchUserData();
    }, [])


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(userData.length / itemsPerPage);

    console.log(currentItems, "currentItems")
    return (
        <>
            <UsersTable userData={currentItems} />
            <div className="text-center mt-3">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={
                            currentPage !== index + 1
                                ? "btn btn-sm m-1 btn-primary"
                                : "btn btn-sm m-1 btn-secondary border border-dark px-3"
                        }
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Users;