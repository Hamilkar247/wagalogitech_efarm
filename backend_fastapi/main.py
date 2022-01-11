import uvicorn


if __name__ == "__main__":
    uvicorn.run(
        "app.api:app", 
        host="0.0.0.0", 
        port=8000, 
        reload=True
    )

@app.on_event("startup")
async def startup_db_client():
    
