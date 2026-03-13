import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import FilterTabs from "../Components/FilterTabs";
import SectionTitle from "../Components/SectionTitle";
import MessageCard from "../Components/MessageCard";

export default function Inbox() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 p-6 md:p-10 bg-[#07161b] min-h-screen">

        <Topbar title="Inbox" subtitle="Stay updated with your interview preparation journey." />

        <FilterTabs />

        {/* TODAY */}
        <SectionTitle title="Today" />

        <div className="space-y-4">
          <MessageCard
            icon="🔺"
            title="System Design Mock Interview"
            tag="URGENT"
            time="10m ago"
            description="Your scheduled session is starting in 10 minutes. Please ensure your camera and microphone are working properly."
            actions={["Join Lobby", "Test Equipment"]}
            type="highlight"
          />

          <MessageCard
            icon="🟣"
            title="Resume Analysis Complete"
            time="45m ago"
            description='Your resume "Senior_Dev_Resume_v2.pdf" has been analyzed. Your match score is 85%'
            link="View Report"
          />

          <MessageCard
            icon="🟢"
            title="Plan Renewed Successfully"
            time="2h ago"
            description="Your Pro Subscription has been renewed."
          />
        </div>

        {/* YESTERDAY */}
        <SectionTitle title="Yesterday" className="mt-12" />

        <div className="space-y-4">
          <MessageCard
            icon="🟦"
            title="New reply to your question"
            time="1d ago"
            description='User @AlexDev replied: “Great question! I usually use the STAR method…”'
            link="Reply to Thread"
          />

          <MessageCard
            icon="⬜"
            title="Scheduled Maintenance"
            time="1d ago"
            description="The platform will undergo maintenance at 2:00 AM UTC."
          />
        </div>

      </div>
    </div>
  );
}