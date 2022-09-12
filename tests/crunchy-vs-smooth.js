const assert = require("assert");
const anchor = require("@project-serum/anchor");

const dotenv = require('dotenv');
dotenv.config();

describe("crunchy-vs-smooth", () => {
  // Configure the client
  // const provider = anchor.Provider.env();
  const provider = anchor.AnchorProvider.local(); // localhost

  anchor.setProvider(provider);

  const program = anchor.workspace.CrunchyVsSmooth;

  let voteAccount, voteAccountBump;

  before(async () => {
    [voteAccount, voteAccountBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("vote_account")],
        program.programId
      );
  });

  it("Initializes with 0 votes for crunchy and smooth", async () => {
    await program.methods
      .initialize(new anchor.BN(voteAccountBump))
      .accounts({
        user: provider.wallet.publicKey,
        voteAccount: voteAccount,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    let currentVoteAccountState = await program.account.votingState.fetch(
      voteAccount
    );
    assert.equal(0, currentVoteAccountState.crunchy.toNumber());
    assert.equal(0, currentVoteAccountState.smooth.toNumber());
  });

  it("Votes correctly for crunchy", async () => {
    await program.methods
      .voteCrunchy()
      .accounts({
        voteAccount: voteAccount,
      })
      .rpc();

    let currentVoteAccountState = await program.account.votingState.fetch(
      voteAccount
    );
    assert.equal(1, currentVoteAccountState.crunchy.toNumber());
    assert.equal(0, currentVoteAccountState.smooth.toNumber());
  });

  it("Votes correctly for smooth", async () => {
    await program.methods
      .voteSmooth()
      .accounts({
        voteAccount: voteAccount,
      })
      .rpc();

    let currentVoteAccountState = await program.account.votingState.fetch(
      voteAccount
    );
    assert.equal(1, currentVoteAccountState.crunchy.toNumber());
    assert.equal(1, currentVoteAccountState.smooth.toNumber());
  });
});
