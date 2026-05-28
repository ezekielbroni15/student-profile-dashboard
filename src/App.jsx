import "./App.css";

import Header from "./components/Header";
import StudentList from "./components/StudentList";

const students = [
  {
    id: 1,
    firstName: "Amara",
    lastName: "Johnson",
    track: "Frontend",
    score: 92,
    isActive: true,
    skills: ["React", "CSS", "TypeScript"],
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    firstName: "Chidi",
    lastName: "Okafor",
    track: "Backend",
    score: 67,
    isActive: true,
    skills: ["Python", "Django"],
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 3,
    firstName: "Fatima",
    lastName: "Hassan",
    track: "Frontend",
    score: 88,
    isActive: false,
    skills: ["HTML", "CSS", "JavaScript", "Vue"],
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    firstName: "Emeka",
    lastName: "Nwosu",
    track: "Mobile",
    score: 45,
    isActive: true,
    skills: [],
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 5,
    firstName: "Zara",
    lastName: "Ahmed",
    track: "Frontend",
    score: 76,
    isActive: true,
    skills: ["React", "Node.js"],
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 6,
    firstName: "David",
    lastName: "Okwu",
    track: "Backend",
    score: 53,
    isActive: false,
    skills: ["SQL"],
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Eze",
    track: "Mobile",
    score: 81,
    isActive: true,
    skills: ["Dart", "Flutter", "Firebase"],
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 8,
    firstName: "Tunde",
    lastName: "Bakare",
    track: "Frontend",
    score: 39,
    isActive: true,
    skills: ["HTML", "CSS"],
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

const App = () => {
  const totalScore = students.reduce(
    (accumulator, student) => accumulator + student.score,
    0,
  );

  const averageScore = totalScore / students.length;

  // Get filter from URL query parameters
  const getFilterFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("filter") || "all";
  };

  const filter = getFilterFromURL();

  const filteredStudents = students.filter((student) => {
    if (filter === "active") {
      return student.isActive;
    }

    if (filter === "inactive") {
      return !student.isActive;
    }

    return true;
  });

  const handleFilterChange = (newFilter) => {
    const url = new URL(window.location);
    url.searchParams.set("filter", newFilter);
    window.history.pushState({}, "", url);
    // Reload the page to apply the filter
    window.location.reload();
  };

  return (
    <div className="app">
      <Header
        title="KodeCamp 6.0 — Student Dashboard"
        studentCount={students.length}
        averageScore={averageScore}
      />

      <div className="filter-container">
        <button
          className={filter === "all" ? "active-btn" : ""}
          onClick={() => handleFilterChange("all")}
        >
          Show All
        </button>

        <button
          className={filter === "active" ? "active-btn" : ""}
          onClick={() => handleFilterChange("active")}
        >
          Active Students
        </button>

        <button
          className={filter === "inactive" ? "active-btn" : ""}
          onClick={() => handleFilterChange("inactive")}
        >
          Inactive Students
        </button>
      </div>

      <StudentList students={filteredStudents} title="Student Roster">
        <p>End of student list — {filteredStudents.length} total</p>
      </StudentList>
    </div>
  );
};

export default App;
