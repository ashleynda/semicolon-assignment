// The 'ashley_auction' program.
program ashley_auction.aleo {
    record Bid {
        owner: address,
        bidder: address,
        amount: u64,
        is_winner: bool,
    }

    // A prize in the auction.
     record Prize {
        owner:address,
        amount: u64,
     }

    // Returns a new bid.
    // - `bidder` : The address of the account that placed the bid.
    // - `amount` : The amount of the bid.
    // Requires that `bidder` matches the function caller.
    // The owner of the record is set to the entity responsible for running the auction (auction runner).
    // The address of the auction runner is aleo1ashyu96tjwe63u0gtnnv8z5lhapdu4l5pjsl2kha7fv7hvz2eqxs5dz0rg.
    transition place_bid(bidder: address, amount: u64) -> Bid {
        // Ensure the caller is the auction bidder.
        assert_eq(self.caller, bidder);
        // Return a new 'Bid' record for the auction bidder.
        return Bid {
            owner: aleo1taqcl3qt4d27rvdcjgfz9kylr0ed3d5c0dqz0pp085qspc5augys05uz7v,
            bidder: bidder,
            amount: amount,
            is_winner: false,
        };
    }

    // Returns the winning bid.
    // - `first`  : The first bid.
    // - `second` : The second bid.
    // Requires that the function caller is the auction runner.
    // Assumes that the function is invoked only after the bidding period has ended.
    // In the event of a tie, the first bid is selected.
    transition resolve(first: Bid, second: Bid) -> Bid {
        // Ensure the caller is the auctioneer.
        assert_eq(self.caller, aleo1taqcl3qt4d27rvdcjgfz9kylr0ed3d5c0dqz0pp085qspc5augys05uz7v);
        // Resolve the winner of the auction.
        if (first.amount >= second.amount) {
            return first;
        } else {
            return second;
        }
    }

    // Returns ownership of the bid to bidder.
    // - `bid` : The winning bid.
    // Requires that the function caller is the auction runner.
    // Assumes that the function is invoked only after all bids have been resolved.
    transition finish(bid: Bid) -> Bid {
        // Ensure the caller is the auctioneer.
        assert_eq(self.caller, aleo1taqcl3qt4d27rvdcjgfz9kylr0ed3d5c0dqz0pp085qspc5augys05uz7v);
        // Return 'is_winner' as 'true' in the winning 'Bid'.
        return Bid {
            owner: bid.bidder,
            bidder: bid.bidder,
            amount: bid.amount,
            is_winner: true,
        };
    }

    // claim the prize with the winning bid.
    transition claim (bid:Bid) -> Prize {
        assert_eq(self.caller, aleo1taqcl3qt4d27rvdcjgfz9kylr0ed3d5c0dqz0pp085qspc5augys05uz7v);

        assert(bid.is_winner);

        return Prize{
            owner:bid.bidder,
            amount:30u64,
        };
    
    }
}
