import React from "react";

export default function index() {
  return (
    <>
    
    <div className="container-fluid">
        <div className="row">
            <div className="col-2 islemcontainer">
                <div className="row siralama">
                    <h2>Sıralama</h2>
                    <div className="order shadow-sm">
                        <img alt="" src="/svg/cup-trophy-svgrepo-com.svg" />
                        Birinci Olan
                    </div>
                    <div className="order shadow-sm">
                        <img alt="" src="/svg/cup-trophy-svgrepo-com.svg" />
                        İkinci Olan
                    </div>
                    <div className="order shadow-sm">
                        <img alt="" src="/svg/cup-trophy-svgrepo-com.svg" />
                        Üçüncü Olan
                    </div>
                    
                </div>
                <div className="row islembutonlari">
                    <div className="d-grid gap-2">
                        <button className="btn btn-success" type="button">Yarışmaya Başla</button>
                        <button className="btn btn-danger" type="button">Yarışmayı Bitir</button>
                        <button className="btn btn-warning" type="button">Yeni Soru</button>
                        
                      </div>
                </div>
            </div>
            <div className="col-6 sorucevapcontainer">
                <div className="row"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
            <div className="col-3 katilimcilarcontainer">
                <div className="row">
                    <h2>KATILIMCI LİSTESİ</h2>
                </div>
                <div className="row">
                    <div className="col-4 yarismaci">
                        <img alt=""  src="https://randomuser.me/api/portraits/men/75.jpg" />
                        <p><small>Ahmet KUŞ</small></p>
                        <div className="online"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
