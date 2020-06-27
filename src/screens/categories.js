import React, { useEffect } from "react";

function CategoriesPage() {
  useEffect(() => {
    document.title = "Categotias";
  });

  return (
    <div className="app-page rel">
      <h1 className="page-title s24 fontB c33">Categories</h1>
    </div>
  );
}

export default CategoriesPage;
