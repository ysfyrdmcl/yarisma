import React from "react";

export default function index() {
  return (
    <>
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-2 islemcontainer">
                <div class="row siralama">
                    <h2>Sıralama</h2>
                    <div class="order shadow-sm">
                        <img alt="" src="/svg/cup-trophy-svgrepo-com.svg" />
                        Birinci Olan
                    </div>
                    <div class="order shadow-sm">
                        <img alt="" src="/svg/cup-trophy-svgrepo-com.svg" />
                        İkinci Olan
                    </div>
                    <div class="order shadow-sm">
                        <img alt="" src="/svg/cup-trophy-svgrepo-com.svg" />
                        Üçüncü Olan
                    </div>
                    
                </div>
                <div class="row islembutonlari">
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="button">Yarışmaya Başla</button>
                        <button class="btn btn-danger" type="button">Yarışmayı Bitir</button>
                        <button class="btn btn-warning" type="button">Yeni Soru</button>
                        
                      </div>
                </div>
            </div>
            <div class="col-6 sorucevapcontainer">
                <div class="row"></div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col"></div>
                </div>
            </div>
            <div class="col-3 katilimcilarcontainer">
                <div class="row">
                    <h2>KATILIMCI LİSTESİ</h2>
                </div>
                <div class="row">
                    <div class="col-4 yarismaci">
                        <img alt=""  src="https://randomuser.me/api/portraits/men/75.jpg" />
                        <p><small>Ahmet KUŞ</small></p>
                        <div class="online"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
