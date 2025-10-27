# VedaGarden 🌿: Immersive Ayurveda & Ethnobotanical Research Platform

**VedaGarden** is a dual-platform project dedicated to modernizing the education and research of traditional Indian medicinal plants, primarily those used in **Ayurveda**. It successfully integrates a high-fidelity **Virtual Reality (VR) Simulator** with a robust, searchable **Web-based Data Portal**.

This project serves as a comprehensive demonstration of technical proficiency across **immersive development**, **data architecture**, and **full-stack engineering**.

-----

## 1\. Project Goal and Philosophy

The VedaGarden project aims to bridge the gap between ancient botanical wisdom and modern scientific inquiry. We utilized cutting-edge technology to transform static data into an interactive, experiential learning resource.

  * **Preservation:** To digitally archive and present verified information on key Indian medicinal flora.
  * **Education:** To offer an immersive, accessible platform for students, practitioners, and researchers.
  * **Innovation:** To showcase a novel approach to the digital preservation of ethnobotanical knowledge using VR technology.

-----

## 2\. Key Features and Technical Stacks

VedaGarden is divided into two interdependent components, each highlighting a distinct set of development skills:

### A. VedaGarden VR Simulator

This component is built for deep, experiential learning and showcases expertise in real-time 3D rendering and VR optimization.

| Feature | Description | Technical Focus |
| :--- | :--- | :--- |
| **High-Fidelity Assets** | Photorealistic, taxonomically accurate 3D models of plants like **Ashwagandha** and **Neem**, optimized for performance in VR. | 3D Modeling Pipeline, Asset Optimization, PBR Rendering. |
| **Interactive Dissection** | Allows users to virtually "cut away" the plant to examine internal anatomy, root systems, and cellular structures used medicinally. | Advanced VR Interaction Programming, Shader Development. |
| **Ergonomic UI** | Features a non-disruptive, integrated **"Virtual Journal"** for accessing data overlays and navigation within the immersive space. | VR UX Design, Unity/Unreal UI Implementation. |
| **Tech Stack** | **Unity** (or **Unreal Engine**), **C\#** (or **C++**), **Blender**, **Substance Painter**. |

-----

### B. VedaGarden Web Portal

This component serves as the accessible data hub, demonstrating proficiency in data structure, searching, and responsive UI/UX design.

| Feature | Description | Technical Focus |
| :--- | :--- | :--- |
| **Advanced Filtering** | Dynamic search interface allowing filtration by Ayurvedic properties (**Rasa, Virya, Dosha**), target ailment, and scientific compound. | Database Design (Schema), API Development. |
| **Structured Profiles** | Dedicated pages for each plant, cross-referencing traditional uses with modern **phytochemical profiles** and external scientific literature links (e.g., PubMed). | Information Architecture, Data Integration. |
| **Responsive Design** | Clean, mobile-friendly interface ensures the *Materia Medica* database is accessible on all devices. | Front-End Development (**React/Vue.js**), UI/UX Principles. |
| **Tech Stack** | **[Specify Front-end Framework, e.g., React]**, **[Specify Back-end/Database, e.g., Node.js/Python & MongoDB]**. |

-----

## 3\. Getting Started

### Prerequisites

To run the project locally, you will need:

1.  **VR Simulator:**
      * A compatible PC VR Headset (Oculus/Meta, Valve Index, etc.).
      * [Specify Game Engine version, e.g., Unity 2022.3 LTS].
2.  **Web Portal:**
      * Node.js (LTS version)
      * A local or cloud instance of [Specify Database, e.g., MongoDB/PostgreSQL].

### Installation and Setup

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/YourUsername/VedaGarden.git
    cd VedaGarden
    ```

2.  **Web Portal Setup:**

    ```bash
    cd Web-Portal/
    npm install
    # Set environment variables for database connection (see .env.example)
    npm start
    ```

    The web portal will run on `http://localhost:3000`.

3.  **VR Simulator Setup:**

      * Open the `VR-Client/` folder in [Specify Game Engine, e.g., Unity Editor].
      * Ensure all required XR packages are installed.
      * Open the `MainScene.unity` file and build for your target VR platform.

-----

## 4\. Repository Structure

| Directory | Purpose |
| :--- | :--- |
| `VR-Client/` | Contains all the game engine assets, scripts, and build settings for the VR application. |
| `Web-Portal/` | Contains all front-end and back-end code for the data-driven website and API. |
| `3D-Assets/` | Central repository for all high-resolution 3D models, textures, and material maps. |
| `Data-API/` | Scripts and schema defining the structure of the botanical and Ayurvedic data. |

-----

## 5\. Contact and Portfolio Link

This project was developed by **[Your Name/Alias]**.

  * **Portfolio:** [Link to your personal portfolio website]
  * **Email:** [Your Professional Email]

Feel free to explore the code and documentation. This project is a testament to the power of merging tradition with modern immersive technology.
