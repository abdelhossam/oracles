# 📡 OracleFeed Dashboard – Live Asset Prices via Chainlink Oracles on Polygon

OracleFeed is a sleek, real-time dashboard that visualizes **live prices for major assets** (Apple, Amazon, Bitcoin, Ethereum) using **Chainlink decentralized oracle feeds** deployed on the **Polygon blockchain**.
The frontend replicates the visual style of professional analytics platforms like **BlockMetrics**, blending clean UI with blockchain-powered data accuracy.

---

## 🛠 **Technologies Used**

| Technology           | Purpose                                       |
| -------------------- | --------------------------------------------- |
| **Solidity**         | Smart contract interface for oracle data feed |
| **Polygon RPC**      | Query Chainlink price oracles on Polygon      |
| **Chainlink Oracle** | Fetch real-world prices on-chain              |
| **ethers.js**        | Read smart contract data                      |

---

## 🌍 **Live Assets & Oracle Contracts**

- 🔗 **Frontend:** [Oracles](https://prismatic-salmiakki-286dd3.netlify.app/)
- 🔥 **Helper Contract:** [0x5143816ed83fb77550e4a65f960fbe5d9979789b](https://polygonscan.com/address/0x5143816ed83fb77550e4a65f960fbe5d9979789b) (Polygon Mainnet)

  
We use the function:

```solidity
function getChainlinkDataFeedLatestAnswer(address oracle) external view returns (
    int256 answer,
    uint8 decimals,
    uint256 updatedAt
);
```

### 🔗 Asset Feeds (on Polygon):

| Asset        | Oracle Address                               |
| ------------ | -------------------------------------------- |
| **Apple**    | `0x7E7B45b08F68EC69A99AAb12e42FcCB078e10094` |
| **Amazon**   | `0xf9184b8E5da48C19fA4E06f83f77742e748cca96` |
| **Bitcoin**  | `0xc907E116054Ad103354f2D350FD2514433D57F6f` |
| **Ethereum** | `0xF9680D99D6C9589e2a93a78A04A279e509205945` |

---

## 📊 **Dashboard Features**

### 📉 Live Asset Price Cards

* Interactive tab bar for switching between Apple, Amazon, BTC, and ETH
* Displays:

  * Token logo and name
  * Real-time price (`answer / 10^decimals`)
  * Next-update timer (auto-refresh every 30s)

---

## 📸 **Preview**

<img width="1593" height="636" alt="image" src="https://github.com/user-attachments/assets/72522a61-d50e-42a2-8561-96be3a7eaaf1" />

---

## 🧠 **Project Highlights**

✔️ Demonstrates live price fetching via **Chainlink decentralized oracle network**<br> 
✔️ Uses **Polygon mainnet** as the underlying EVM network<br> 
✔️ Connects **smart contracts and frontend** using ethers.js<br> 

---

## 📩 **Let's Connect**

📧 **Email**: [abdel.hossam.m@gmail.com](mailto:abdel.hossam.m@gmail.com)
💼 **LinkedIn**: [abdelhossam](https://www.linkedin.com/in/abdelhossam/)

---
