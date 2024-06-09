import Loader from "../../../COMPONENTS/LOADER/Loader";
import useRole from "../../../HOOKS/useRole";
import AdminStatistics from "./AdminStatistics";
import Prouserstatistics from "./Prouserstatistics";
import SurveyorStatistics from "./SurveyorStatistics";
import UserStatistics from "./UserStatistics";

const Statistics = () => {
  const {role, isLoading} = useRole()
  if(isLoading){
    return <Loader />
  }
  return (
    <section>
      {role === "user" && <UserStatistics />}
      {role === "prouser" && <Prouserstatistics />}
      {role === "surveyor" && <SurveyorStatistics />}
      {role === "admin" && <AdminStatistics />}
    </section>
  );
};

export default Statistics;
